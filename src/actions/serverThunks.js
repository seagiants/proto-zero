import {
  switchToWaitScreen,
  switchToGameScreen,
  gameCreated,
  storeMap,
  errorCreatingGame,
  storeGamesList,
  errorFetchingGamesList
} from "./index.js";

/* Utils */
function webSocketCreation(dispatch, gameId, playerNum) {
  try {
    const socket = new WebSocket(
      `ws://localhost:9000/channel/${gameId}/${playerNum}`
    );
    socket.onmessage = message => {
      console.log("Action received from server, raw message is :", message);
      const action = JSON.parse(message.data);
      dispatch(action);
    };
    dispatch(storeWebSocket(socket));
  } catch (error) {
    dispatch(errorCreatingWebSocket(error));
  }
}

/* Action types */
export const STORE_WEBSOCKET = "STORE_WEBSOCKET";
export const ERROR_CREATING_WEBSOCKET = "ERROR_CREATING_WEBSOCKET";

/* Action creators */
export function storeWebSocket(socket) {
  return { type: STORE_WEBSOCKET, socket: socket };
}

export function errorCreatingWebSocket(error) {
  return { type: ERROR_CREATING_WEBSOCKET, error: error };
}

/* Thunks */
export function askForGameCreation(playerName) {
  return function(dispatch) {
    fetch(`http://localhost:9000/newgame?playerName=${playerName}`)
      .then(response => {
        return response.json();
      })
      .then(game => {
        dispatch(gameCreated(game));
        dispatch(switchToWaitScreen()); // can switch to game screen for dev if needed
        dispatch(storeMap(game.gameMap));
      })
      .catch(error => {
        console.log(error);
        dispatch(errorCreatingGame());
      });
  };
}

export function askForGamesList() {
  return function(dispatch) {
    fetch("http://localhost:9000/games-list")
      .then(resp => {
        return resp.json();
      })
      .then(gamesList => {
        if (gamesList.length > 0) {
          dispatch(storeGamesList(gamesList));
        }
      })
      .catch(error => {
        dispatch(errorFetchingGamesList(error));
      });
  };
}

export function registerWebSocket(gameId, playerId) {
  return function(dispatch) {
    webSocketCreation(dispatch, gameId, "one");
  };
}

export function joinGame(url, gameId) {
  return function(dispatch) {
    console.log("join game at url", url);
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(game => {
        dispatch(gameCreated(game));
        dispatch(storeMap(game.gameMap));
        dispatch(switchToGameScreen());
        webSocketCreation(dispatch, gameId, "two");
      })
      .catch(error => {
        console.log("Error joining the game", error);
        // TODO implement a proper action
      });
  };
}

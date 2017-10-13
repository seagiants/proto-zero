import {
  switchToWaitScreen,
  switchToGameScreen,
  gameCreated,
  storeMap,
  errorCreatingGame,
  storeGamesList,
  errorFetchingGamesList
} from "./index.js";

/* Action types */
export const STORE_WEBSOCKET = "STORE_WEBSOCKET";
export const ERROR_CREATING_WEBSOCKET = "ERROR_CREATING_WEBSOCKET";

/* Action creators */
export function storeWebSocket(socket) {
  return { type: STORE_WEBSOCKET, socket: socket};
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
  console.log("in thunk rws", gameId, playerId);
  return function(dispatch) {
    try {
      const socket = new WebSocket(`ws://localhost:9000/ws-test/${gameId}`);
      socket.onmessage = (message) => {
        console.log("Action received from server, raw message is :", message);
        const action = JSON.parse(message.data);
        dispatch(action);
      };
      dispatch(storeWebSocket(socket));
    } catch(error) {
      dispatch(errorCreatingWebSocket(error));
    }
  }
}

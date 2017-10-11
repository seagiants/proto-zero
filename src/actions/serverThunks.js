import {
  switchToGameScreen,
  gameCreated,
  storeMap,
  errorCreatingGame,
  storeGamesList,
  errorFetchingGamesList
} from "./index.js";

export function askForGameCreation(playerName) {
  return function(dispatch) {
    fetch(`http://localhost:9000/newgame?playerName=${playerName}`)
      .then(response => {
        return response.json();
      })
      .then(game => {
        dispatch(switchToGameScreen()); // can switch to game screen for dev if needed
        dispatch(gameCreated(game));
        dispatch(storeMap(game.gameMap));
      })
      .catch(error => {
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

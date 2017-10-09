import * as powerLogic from "../engine/powerLogic";

/* Action types */
export const SWITCH_TO_GAME_SCREEN = "SWITCH_TO_GAME_SCREEN";
export const ASK_FOR_GAME_CREATION = "ASK_FOR_GAME_CREATION";
export const ASK_FOR_GAMES_LIST = "ASK_FOR_GAMES_LIST";
export const STORE_GAMES_LIST = "STORE_GAMES_LIST";
export const ERROR_FETCHING_GAMES_LIST = "ERROR_FETCHING_GAMES_LIST";
export const GAME_CREATED = "GAME_CREATED";
export const ERROR_CREATING_GAME = "ERROR_CREATING_GAME";
export const START_GAME = "START_GAME";
export const STORE_MAP = "STORE_MAP";
export const GENERATE_MAP = "GENERATE_MAP"; // FIXME to be replaced by STORE MAP
export const DISCOVER_CELL = "DISCOVER_CELL";
export const SELECTED_CARD = "SELECTED_CARD";
export const POWER_SELECTION = "POWER_SELECTION";
export const CLICK_CELL = "CLICK_CELL";
export const DRAW = "DRAW";
export const NO_ACTION = "NO_ACTION";
export const RESEARCH = "RESEARCH";
export const EXPLORE = "EXPLORE";
export const PRODUCE = "PRODUCE";
export const ARMY = "ARMY";
export const TAP_POWER_CASE = "TAP_POWER_CASE";
export const REFRESH_POWER_BOARD = "REFRESH_POWER_BOARD";
export const UPDATE_RESOURCE_COUNTER = "UPDATE_RESOURCE_COUNTER";
export const ENHANCEMENT = "ENHANCEMENT";
export const BUILD = "BUILD";

/* Action creators */
export function switchToGameScreen() {
  return { type: SWITCH_TO_GAME_SCREEN };
}

export function gameCreated(game) {
  return { type: GAME_CREATED, game: game };
}

export function errorCreatingGame(error) {
  return { type: ERROR_CREATING_GAME, error: error };
}

export function storeGamesList(gamesList) {
  return { type: STORE_GAMES_LIST, gamesList: gamesList };
}

export function errorFetchingGamesList(error) {
  return { type: ERROR_FETCHING_GAMES_LIST, error: error };
}

export function storeMap(map) {
  return { type: STORE_MAP, map: map };
}

export function startGame() {
  return {
    type: START_GAME
  };
}

export function generateMap(x, y) {
  return {
    type: GENERATE_MAP,
    x: x,
    y: y
  };
}

export function discoverCell(x, y,props) {
  return {
    type: DISCOVER_CELL,
    x: x,
    y: y,
    radius: props.radius
  };
}

export function build(x,y,props) {
  return {
    type: BUILD,
    x:x,
    y:y,
    build: props.build
  };
}

export function clickCell(x, y) {
  return {
    type: CLICK_CELL,
    x: x,
    y: y
  };
}

export function draw(player) {
  return {
    type: DRAW,
    player: player
  };
}

export function selectedCard(player, card, index) {
  return {
    type: SELECTED_CARD,
    player: player,
    card: card,
    cardIndex: index
  };
}
export function powerSelection(player, powerCase) {
  return {
    type: POWER_SELECTION,
    player: player,
    powerCase: powerCase
  };
}

export function noAction(message = "Not implemented") {
  console.log(`NoAction:${message}`);
  return {
    type: NO_ACTION,
    message: message
  };
}

export function explore(player) {
  return {
    type: NO_ACTION,
    player: player
  };
}

export function produce(player, powerProps) {
  return {
    type: PRODUCE,
    player: player,
    powerProps: powerProps
  };
}

export function research(player) {
  return {
    type: NO_ACTION,
    player: player
  };
}

export function tapPowerCase(player, categoryName,persistent) {
  return {
    type: TAP_POWER_CASE,
    player: player,
    categoryName: categoryName,
    persistent: persistent
  };
}

export function refreshPowerBoard(player) {
  return {
    type: REFRESH_POWER_BOARD,
    player: player
  };
}

export function updateResourceCounter(player,cost){
  return {
    type: UPDATE_RESOURCE_COUNTER,
    player: player,
    cost: cost
  }
}

export function enhancement(player,powerProps){
  return {
    type: ENHANCEMENT,
    player : player,
    powerProps : powerProps
  }
}
/* thunks */
export function askForGameCreation(playerName) {
  return function(dispatch) {
    fetch(`http://localhost:9000/newgame?playerName=${playerName}`)
      .then(response => {
        return response.json();
      })
      .then(game => {
        dispatch(switchToGameScreen());
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

//FIXME Need a real actionFlow logic to avoid redundancy
export function clickOnPowerCase(player, powerCase) {
  return function(dispatch, getState) {
    const activePower = powerLogic.getActivePower(powerCase);
    //Check if tapped
    if (powerCase.isTapped){
      dispatch(noAction("Tapped!"));
    //Check cost avalaible
    } else if (!powerLogic.isPowerPlayable(activePower, getState())) {
      dispatch(noAction("Not enough Ressources!"));
    //Check if a target is required
    } else if (activePower.powerProps.isTargetRequired) {
      dispatch(powerSelection(player, powerCase, activePower.powerProps));
    //Fire the power
    } else {
      dispatch(activePower.powerAction(player, activePower.powerProps));
      dispatch(tapPowerCase(player, powerCase.categoryName,activePower.powerProps.persistent));
      dispatch(updateResourceCounter(player,activePower.powerProps.cost));
      }
    }
  };

//FIXME Need a real actionFlow logic to avoid redundancy
export function clickOnEndTurn(player) {
  return function(dispatch, getState) {
    dispatch(refreshPowerBoard(player));
  };
}

//FIXME Need a real actionFlow logic to avoid redundancy
export function clickOnCell(x, y, selectedPower) {
  return function(dispatch, getState) {
    if (selectedPower === null || selectedPower === undefined) {
      dispatch(noAction("No power"));
    } else {
      dispatch(selectedPower.powerAction(x, y,powerLogic.getAddedPowerProps(selectedPower,getState())));
      const player = getState().mapState.activePlayer;
      dispatch(tapPowerCase(player, selectedPower.category.name,selectedPower.powerProps.persistent));
      dispatch(updateResourceCounter(player,selectedPower.powerProps.cost))
      }
  };
}

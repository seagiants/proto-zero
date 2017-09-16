import * as powerLogic from "../engine/powerLogic";

/* Action types */
export const START_GAME = "START_GAME";
export const GENERATE_MAP = "GENERATE_MAP";
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

/* Action creators */
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

export function discoverCell(x,y) {
  return{
    type: DISCOVER_CELL,
    x: x,
    y: y
  };
}

export function clickCell(x,y) {
  return{
    type: CLICK_CELL,
    x: x,
    y: y
  };
}

export function draw(player) {
  return{
    type: DRAW,
    player: player
  };
};

export function selectedCard(player, card, index) {
  return {
    type: SELECTED_CARD,
    player: player,
    card: card,
    cardIndex: index
  };
};
  export function powerSelection(player, powerCase) {
    return {
      type: POWER_SELECTION,
      player: player,
      powerCase: powerCase
    };
  };

  export function noAction(player,message="No message"){
    return {
      type: NO_ACTION,
      player: player,
      message: message
    };
  };

  export function explore(player){
    return {
      type: NO_ACTION,
      player: player
  };
};

  export function produce(player,powerProps){
    return {
      type: PRODUCE,
      player: player,
      powerProps : powerProps
  };
};

  export function research(player){
    return {
      type: NO_ACTION,
      player: player
  };
};

  export function tapPowerCase(player,categoryName){
    return {
      type: TAP_POWER_CASE,
      player: player,
      categoryName: categoryName
    };
  };

  export function refreshPowerBoard(player){
    return {
      type: REFRESH_POWER_BOARD,
      player: player
    };
  };


/* thunks */
export function clickOnPowerCase(player,powerCase){
    return function (dispatch,getState){
      const activePower = powerLogic.getActivePower(powerCase);
      if(powerCase.isTapped || !powerLogic.isPowerPlayable(activePower,getState())){
        dispatch(noAction(player))
      }else{
        if (!activePower.powerProps.isTargetRequired) {
          dispatch(activePower.powerAction(player, activePower.powerProps));
          dispatch(tapPowerCase(player,powerCase.categoryName));
        } else {
          dispatch(powerSelection(player, powerCase, activePower.powerProps));
        }
      }
    };
  };

  export function clickOnEndTurn(player){
    return function (dispatch,getState) {
      dispatch(refreshPowerBoard(player));
      dispatch(draw(player));
    };
  };

 export function clickOnCell(x,y,selectedPower){
       return function (dispatch,getState){
         console.log(selectedPower);
         if (selectedPower !== null && selectedPower !== undefined) {
           dispatch(selectedPower.powerAction(x, y));
           if(powerLogic.isPowerPlayable(selectedPower,getState())) {
           const player = getState().mapState.activePlayer;
           dispatch(tapPowerCase(player,selectedPower.category.name));
          }else{
            dispatch(noAction("Not enough resource"))
          }
         }else{
           dispatch(noAction("No power"));
         }
    };
  };

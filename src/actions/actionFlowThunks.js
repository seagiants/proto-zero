import {noAction,
        powerSelection,
        tapPowerCase,
        updateResourceCounter,
        refreshPowerBoard,
        } from "./index.js"
import * as powerLogic from "../engine/powerLogic.js"

export function clickOnPowerCase(player, powerCase) {
  return function(dispatch, getState) {
    const activePower = powerLogic.getActivePower(powerCase);
    const powerCaseStatus = powerLogic.checkPowerCaseStatus(player,powerCase,getState());
    switch (powerCaseStatus) {
      case powerLogic.S_TAPPED:
        dispatch(noAction("Tapped!"));
        break;
      case powerLogic.S_NO_RESSOURCE:
        dispatch(noAction("Not enough Ressources!"));
        break;
      case powerLogic.S_WAIT_TARGET:
        dispatch(powerSelection(player, powerCase, activePower.powerProps));
        break;
      case powerLogic.S_FIRE_POWER:
        dispatch(activePower.powerAction(player, activePower.powerProps));
        dispatch(tapPowerCase(player, powerCase.categoryName,activePower.powerProps.persistent));
        dispatch(updateResourceCounter(player,activePower.powerProps.cost));
        break;
      default:
        dispatch(noAction(`Status ${powerCaseStatus} not implemented`))
    }
  }
};

//FIXME Need a real actionFlow logic to avoid redundancy
export function clickOnEndTurn(player) {
  return function(dispatch, getState) {
    dispatch(refreshPowerBoard(player));
    dispatch(updateResourceCounter(player,0-powerLogic.getProductivity(player,getState())))
  };
}

//FIXME Need a real actionFlow logic to avoid redundancy
export function clickOnCell(x, y, selectedPower) {
  return function(dispatch, getState) {
    const state = getState();
    const cellStatus = powerLogic.checkCellStatus(x,y,selectedPower,state);
    switch (cellStatus) {
      case powerLogic.S_NO_POWER:
        dispatch(noAction("No power"));
        break;
      case powerLogic.S_CONDITIONS_NOT_MET:
        dispatch(noAction("powerConditions not met"));
        break;
      case powerLogic.S_FIRE_POWER:
        dispatch(selectedPower.powerAction(x, y,powerLogic.getAddedPowerProps(selectedPower,getState())));
        const player = state.mapState.activePlayer;
        dispatch(tapPowerCase(player, selectedPower.category.name,selectedPower.powerProps.persistent));
        dispatch(updateResourceCounter(player,selectedPower.powerProps.cost))
        break;
      default:
      dispatch(noAction(`Status ${cellStatus} not implemented`))
    }
  }
};

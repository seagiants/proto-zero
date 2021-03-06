import {
  noAction,
  powerSelection,
  tapPowerCase,
  updateResourceCounter,
  refreshPowerBoard,
  evolve,
  changePlayerTurn
} from "./index.js";
import * as powerLogic from "../engine/powerLogic.js";

export function flowAfterFirePower(activePower, player) {
  return function(dispatch, getState) {
    //Tap used powerCase
    dispatch(
      tapPowerCase(
        player,
        activePower.category.name,
        activePower.powerProps.persistent
      )
    );
    //Evolve if needed
    if (
      activePower.powerProps.evolution !== null &&
      activePower.powerProps.evolution !== undefined
    ) {
      dispatch(evolve(player, activePower.powerProps.evolution));
    }
    //Update resourceCounter
    dispatch(updateResourceCounter(player, activePower.cost));
  };
}

export function clickOnPowerCase(player, powerCase) {
  return function(dispatch, getState) {
    const activePower = powerLogic.getActivePower(powerCase);
    const powerCaseStatus = powerLogic.checkPowerCaseStatus(
      player,
      powerCase,
      getState()
    );
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
        dispatch(flowAfterFirePower(activePower, player));
        /*
        dispatch(
          tapPowerCase(
            player,
            powerCase.categoryName,
            activePower.powerProps.persistent
          )
        );
        if(activePower.powerProps.evolution !== null && activePower.powerProps.evolution !== undefined) {
          dispatch(evolve(activePower.powerProps.evolution));
        }
        dispatch(updateResourceCounter(player, activePower.powerProps.cost));
        */
        break;
      default:
        dispatch(noAction(`Status ${powerCaseStatus} not implemented`));
    }
  };
}

//FIXME Need a real actionFlow logic to avoid redundancy
export function clickOnEndTurn(player) {
  return function(dispatch, getState) {
    const state = getState();
    const serverAction = { type: "END_TURN", data: { some: "DATA" } };
    state.gameState.socket.send(JSON.stringify(serverAction));
    dispatch(refreshPowerBoard(player));
    dispatch(changePlayerTurn());
    dispatch(
      updateResourceCounter(
        player,
        0 - powerLogic.getProductivity(player, getState())
      )
    );
  };
}

//FIXME Need a real actionFlow logic to avoid redundancy
export function clickOnCell(x, y, selectedPower) {
  return function(dispatch, getState) {
    const state = getState();
    const cellStatus = powerLogic.checkCellStatus(x, y, selectedPower, state);
    switch (cellStatus) {
      case powerLogic.S_NO_POWER:
        dispatch(noAction("No power"));
        break;
      case powerLogic.S_CONDITIONS_NOT_MET:
        dispatch(noAction("powerConditions not met"));
        break;
      case powerLogic.S_FIRE_POWER:
        dispatch(
          selectedPower.powerAction(
            x,
            y,
            powerLogic.getAddedPowerProps(selectedPower, getState())
          )
        );
        const player = state.mapState.activePlayer;
        dispatch(flowAfterFirePower(selectedPower, player));
        /*dispatch(
          tapPowerCase(
            player,
            selectedPower.category.name,
            selectedPower.powerProps.persistent
          )
        );
        if(activePower.powerProps.evolution !== null && activePower.powerProps.evolution !== undefined) {
          dispatch(evolve(activePower.powerProps.evolution));
        }
        dispatch(updateResourceCounter(player, selectedPower.powerProps.cost));
        */
        break;
      default:
        dispatch(noAction(`Status ${cellStatus} not implemented`));
    }
  };
}

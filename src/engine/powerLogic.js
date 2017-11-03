import { getBuilding } from "../libraries/buildingLib.js";

export const S_TAPPED = "TAPPED";
export const S_NO_RESSOURCE = "NO_RESSOURCE";
export const S_WAIT_TARGET = "WAIT_TARGET";
export const S_FIRE_POWER = "FIRE_POWER";
export const S_NO_POWER = "NO_POWER";
export const S_CONDITIONS_NOT_MET = "CONDITIONS_NOT_MET";
//The active Power of a PowerCase is the one of is attached card,
//or by default its own defaultPower
export const getActivePower = powerCase => {
  if (powerCase.card !== null && powerCase.card !== undefined) {
    return powerCase.card;
  } else {
    return powerCase.defaultPower;
  }
};

//FIXME should have a default checkConditions mechanism on all powers&cards
export function checkPowerWithTargetConditions(x, y, power, state) {
  //Power with building => check building conditions
  if (power.powerProps.build !== undefined && power.powerProps.build !== null) {
    return getBuilding(power.powerProps.build).checkConditions(x, y, state);
    //Else conditions are ok
  } else if (power.checkConditions !== undefined && power.checkConditions !== null) {
    return power.checkConditions(x,y,state);
  } else {
    return true;
  }
}
export function isPowerCostAffordable(power, state) {
  return (
    power.cost <
    state.playersState[state.mapState.activePlayer].playerBoard
      .resourceCounter +
      1
  );
}

//FIXME Quick&dirty implementation, need generic one (active player & category case) and more simpler
export function getAddedPowerProps(power, state) {
  switch (power.category.name) {
    case "EXPLORATION":
      const powerCaseRadius = state.playersState[
        "playerOne"
      ].playerBoard.powerBoard.filter(
        element => power.category.name === element.categoryName
      )[0].defaultPower.powerProps.radius;
      const addedRadius =
        power.powerName !== "EXPLORE"
          ? powerCaseRadius + power.powerProps.radius
          : powerCaseRadius;
      return {
        ...power.powerProps,
        radius: addedRadius
      };
    default:
      return power.powerProps;
  }
}

export function getProductivity(player, state) {
  let reducedMap = state.mapState.gameMap.reduce((memo, cell) => {
    if (cell.content === undefined || cell.content === null) {
      return memo;
    } else if (
      cell.content.buildingProps.productivity === null ||
      cell.content.buildingProps.productivity === undefined
    ) {
      return memo;
    } else {
      return memo + 1;
    }
  }, 0);
  return reducedMap;
}

const isTapped = powerCase => powerCase.isTapped;
const isTargetRequired = power => power.isTargetRequired;

export function checkPowerCaseStatus(player, powerCase, state) {
  const activePower = getActivePower(powerCase);
  //Check if tapped
  if (isTapped(powerCase)) {
    return S_TAPPED;
    //Check cost avalaible
  } else if (!isPowerCostAffordable(activePower, state)) {
    return S_NO_RESSOURCE;
    //Check if a target is required
  } else if (isTargetRequired(activePower)) {
    return S_WAIT_TARGET;
    //Fire the power
  } else {
    return S_FIRE_POWER;
  }
}

export function checkCellStatus(x, y, selectedPower, state) {
  //Check if a power is selected
  if (selectedPower === null || selectedPower === undefined) {
    return S_NO_POWER;
    //Check if powerConditions are met
  } else if (!checkPowerWithTargetConditions(x, y, selectedPower, state)) {
    return S_CONDITIONS_NOT_MET;
  } else {
    return S_FIRE_POWER;
  }
}

//The active Power of a PowerCase is the one of is attached card,
//or by default its own defaultPower
export const getActivePower = powerCase => {
  if (powerCase.card !== null && powerCase.card !== undefined) {
    return powerCase.card;
  } else {
    return powerCase.defaultPower;
  }
};

export function isPowerPlayable(power,state){
  return power.powerProps.cost < state.playersState[state.mapState.activePlayer].playerBoard.resourceCounter +1
}

//FIXME Quick&dirty implementation, need generic one (active player & category case) and more simpler
export function getAddedPowerProps(power,state){
    switch (power.category.name) {
      case "EXPLORATION":
        const powerCaseRadius = state.playersState["playerOne"].playerBoard.powerBoard.filter((element)=>power.category.name===element.categoryName)[0].defaultPower.powerProps.radius;
        const addedRadius = (power.powerName !== "EXPLORE") ? powerCaseRadius+power.powerProps.radius : powerCaseRadius;
        return {
          ...power.powerProps,radius:addedRadius
      };
      default:
        return power.powerProps;
    }
}

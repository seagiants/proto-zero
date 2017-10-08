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
  return power.cost < state.playersState[state.mapState.activePlayer].playerBoard.resourceCounter +1
}

//FIXME Quick&dirty implementation, need generic one (active player & category case)
export function getAddedPowerProps(power,state){
    switch (power.category.name) {
      case "EXPLORATION":
        console.log(state.playersState["playerOne"].playerBoard.powerBoard.filter((element)=>power.category.name===element.categoryName)[0].defaultPower);
        const powerCaseRadius = state.playersState["playerOne"].playerBoard.powerBoard.filter((element)=>power.category.name===element.categoryName)[0].defaultPower.powerProps.radius;
        const addedRadius = (power.powerProps.radius !== null && power.powerProps.radius !== null) ? powerCaseRadius+power.powerProps.radius : powerCaseRadius;
        return {
          ...power.powerProps,radius:addedRadius
      };
      default:
        return power.powerProps;
    }
}

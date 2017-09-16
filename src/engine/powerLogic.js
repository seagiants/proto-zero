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

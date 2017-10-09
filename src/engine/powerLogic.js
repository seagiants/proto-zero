import { getBuilding } from "../libraries/buildingLib.js";

//The active Power of a PowerCase is the one of is attached card,
//or by default its own defaultPower
export const getActivePower = powerCase => {
  if (powerCase.card !== null && powerCase.card !== undefined) {
    return powerCase.card;
  } else {
    return powerCase.defaultPower;
  }
};

export function checkPowerWithTargetConditions(x,y,power,state){
  //Power with building => check building conditions
  if(power.powerProps.build !==undefined && power.powerProps.build !==null ){
    return (getBuilding(power.powerProps.build)).checkConditions(x,y,state)
  //Else conditions are ok
  } else {
    return true
  }
}
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

export function getProductivity(player,state){
  let reduceRow = (row) => row.reduce((memo,cell)=>{
      if(cell.content === undefined || cell.content === null){
        return memo;
      } else if (cell.content.buildingProps.productivity === null || cell.content.buildingProps.productivity === undefined ){
        return memo;
      } else {
        return memo + 1
      }
    },0);
  let reduceMap = state.mapState.gameMap.reduce((memo,row)=>(memo+reduceRow(row)),0)
  return reduceMap
};

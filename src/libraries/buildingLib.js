import {isCellVisible, isOnSpecificType, isNeighboursSpecificType} from "../engine/mapLogic.js";


//FIXME need entity mechanism. building = {buildingName,symbol,buildingConditions,buildingProps}
const buildingLibrairy = [
  {
    buildingName: "Factory",
    symbol: "F",
    // FIXME why pass the ENTIRE state here, we only need the gameMap
    checkConditions: (x, y, state) =>
      isCellVisible(x, y, state) && isOnSpecificType(x, y, state, "land"),
    buildingProps: {
      productivity: 1
    }
  },
  {
    buildingName: "Nexus",
    symbol: "N",    
    checkConditions: (x, y, state) =>
      isCellVisible(x, y, state) && isOnSpecificType(x,y,state,"land") && isNeighboursSpecificType(x,y,state,"cristal"),
    buildingProps: {
      productivity: 1
    }
  }
];

export const generateBuilding = buildingTemplate => {
  return {
    ...buildingTemplate
  };
};

export const getBuilding = name =>
  buildingLibrairy.filter(element => element.buildingName === name)[0];

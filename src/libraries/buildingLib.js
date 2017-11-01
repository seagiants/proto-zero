import {
        isCellVisible,
        isOnSpecificType,
        isNeighboursSpecificType,
        hasSpecificBuilding
      } from "../engine/mapLogic.js";


//FIXME need entity mechanism. building = {buildingName,symbol,buildingConditions,buildingProps}
const buildingLibrairy = [
  {
    buildingName: "Factory",
    symbol: "F",
    // FIXME why pass the ENTIRE state here, we only need the gameMap
    checkConditions: (x, y, state) =>
      isCellVisible(x, y, state.mapState.gameMap) && isOnSpecificType(x, y, state.mapState.gameMap, "mountain"),
    buildingProps: {
      productivity: 1
    }
  },
  {
    buildingName: "Nexus",
    symbol: "N",
    checkConditions: (x, y, state) =>
      isCellVisible(x, y, state.mapState.gameMap) && isOnSpecificType(x,y,state.mapState.gameMap,"land") && isNeighboursSpecificType(x,y,state.mapState.gameMap,"cristal"),
    buildingProps: {
      productivity: 1,
      shield: 0
    }
  },
  {
    buildingName: "Shield",
    symbol: "S",
    checkConditions: (x, y, state) =>
      isCellVisible(x, y, state.mapState.gameMap) && hasSpecificBuilding(x,y,state.mapState.gameMap,"Nexus"),
    buildingProps: {
      shield: 1
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

const isOnSpecificType = (x, y, state, typeName) => {
  const gMap = state.mapState.gameMap;
  // pop() becuz we suppose x and y are unique so a unique cell can be found
  const targetCell = gMap.filter(cell => cell.x === x && cell.y === y).pop();
  console.log(targetCell);
  return targetCell.cellType === typeName;
};

const isCellVisible = (x, y, state) => {
  const gMap = state.mapState.gameMap;
  // pop() becuz we suppose x and y are unique so a unique cell can be found
  const targetCell = gMap.filter(cell => cell.x === x && cell.y === y).pop();
  return targetCell.hidden === false;
};


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
  }
];

export const generateBuilding = buildingTemplate => {
  return {
    ...buildingTemplate
  };
};

export const getBuilding = name =>
  buildingLibrairy.filter(element => element.buildingName === name)[0];

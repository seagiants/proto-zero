export const getCellNeighbours = (x, y, gameMap) => {
  return gameMap.filter(cell => {
    let testX = cell.x===x && (cell.y === y + 1 || cell.y === y-1);
    let testY = cell.y===y && (cell.x === x + 1 || cell.x === x-1);
    return testX || testY
    })
};

export const isOnSpecificType = (x, y, gameMap, typeName) => {
  // pop() becuz we suppose x and y are unique so a unique cell can be found
  const targetCell = gameMap.filter(cell => cell.x === x && cell.y === y).pop();
  //console.log(targetCell);
  return targetCell.cellType === typeName;
};

export const isNeighboursSpecificType = (x, y, gameMap, typeName) => {
  const neighbours = getCellNeighbours(x,y,gameMap);
  return neighbours.filter(cell => isOnSpecificType(cell.x,cell.y,gameMap,typeName)).length > 0
};

//Accept true as buildingName for any building.
export const hasSpecificBuilding = (x, y, gameMap, buildingName) => {
  // pop() becuz we suppose x and y are unique so a unique cell can be found
  const targetCell = gameMap.filter(cell => cell.x === x && cell.y === y).pop();
  //console.log(targetCell);
  return targetCell.content !== undefined && targetCell.content !== null && (buildingName === true || targetCell.content.buildingName === buildingName);
};

export const hasNeighboursSpecificBuilding = (x,y,gameMap,buildingName) => {
  const neighbours = getCellNeighbours(x,y,gameMap);
  return neighbours.filter(cell => hasSpecificBuilding(cell.x,cell.y,gameMap,buildingName)).length > 0
};

export const isCellVisible = (x, y, gameMap) => {
  // pop() becuz we suppose x and y are unique so a unique cell can be found
  const targetCell = gameMap.filter(cell => cell.x === x && cell.y === y).pop();
  return targetCell.hidden === false;
};

export function addBuildingToCell(cell,building){
  return {...cell, hidden:false, stuff: building};
}

export function getCellNeighboursWithSpecificBuilding(x,y,gameMap, buildingName) {
  const neighbours = getCellNeighbours(x,y,gameMap).filter(cell => hasSpecificBuilding(cell.x,cell.y,gameMap,buildingName));
  console.log(neighbours);
  return neighbours[0];
}

export function changeCell(gameMap,x,y,changeFunction){
  return gameMap.map((row, index) => {
    if (index !== x) {
      return row;
    } else {
      return row.map((cell, index) => {
        if (index !== y) {
          return cell;
        } else {
          return changeFunction(cell);
        }
      });
    }
  });
};

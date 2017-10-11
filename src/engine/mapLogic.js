
export function addBuildingToCell(cell,building){
  return {...cell, hidden:false, stuff: building};
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

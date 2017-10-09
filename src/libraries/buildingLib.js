
const isOnSpecificType = (x,y,state,typeName) => state.mapState.gameMap[x][y].name === typeName;
const isCellVisible = (x,y,state) => state.mapState.gameMap[x][y].hidden !== true;

//FIXME need entity mechanism. building = {buildingName,symbol,buildingConditions,buildingProps}
const buildingLibrairy = [
  {
    buildingName: "Factory",
    symbol : "F",
    checkConditions: (x,y,state)=> ( isCellVisible(x,y,state) && isOnSpecificType(x,y,state,"grass")),
    buildingProps : {
      productivity : 1
      }
    }
  ];

export const generateBuilding = (buildingTemplate) => {
  return {
    ...buildingTemplate
    };
};


export const getBuilding = (name) => buildingLibrairy.filter((element) => (element.buildingName === name) )[0];


//FIXME need entity mechanism. building = {buildingName,symbol,buildingProps}
const buildingLibrairy = [
  {
    buildingName: "Factory",
    symbol : "F",
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

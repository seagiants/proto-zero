import * as actions from "../actions";

// FIXME color scheme should be extracted to a proper file
const powerCategoryLibrairy = [
   {
    name : "EXPLORATION",
    index : 0,
    color : "#4212AF",
    altColor: "#8D6DD7"
  },
  {
    name : "TECHNOLOGY",
    index : 1,
    color : "#FF1E00",
    altColor: "#FF8373"
  },
  {
    name : "ECONOMY",
    index : 2,
    color : "#00BF32",
    altColor: "#64DF85"
  },
  {
    name : "MILITARY",
    index : 3,
    color : "#FFDA00",
    altColor: "#FFEB73"
  }
];

export function getCategory(categoryName){
  return powerCategoryLibrairy.filter((element)=>(element.name === categoryName))[0];
};

const powerLibrairy = [
  {
    powerName : actions.EXPLORE,
    category : getCategory("EXPLORATION"),
    powerAction : actions.discoverCell,
    powerProps : {
      isTargetRequired : true
    }  },
  {
    powerName : actions.RESEARCH,
    category : getCategory("TECHNOLOGY"),
    powerAction : actions.draw,
    powerProps : {
      isTargetRequired : false
      }
    },
  {
    powerName : actions.PRODUCE,
    category : getCategory("ECONOMY"),
    powerAction : actions.produce,
    powerProps : {
      isTargetRequired : false,
      quantity : 1
    }
  },
  {
    powerName : actions.ARMY,
    category : getCategory("MILITARY"),
    powerAction : actions.noAction,
    powerProps : {
      isTargetRequired : false
      }
    }
];

export const getPowerCase = (powerName) => powerLibrairy.filter((element) => (element.powerName === powerName) )[0];

import * as actions from "../actions";

const powerCategoryLibrairy = [
   {
    name : "EXPLORATION",
    index : 0,
    color : "green"
  },
  {
    name : "TECHNOLOGY",
    index : 1,
    color : "blue"
  },
  {
    name : "ECONOMY",
    index : 2,
    color : "yellow"
  },
  {
    name : "MILITARY",
    index : 3,
    color : "red"
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

export const getPower = (powerName) => powerLibrairy.filter((element) => (element.powerName === powerName) )[0];

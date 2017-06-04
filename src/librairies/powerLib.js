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
    isTargetRequired : true
  },
  {
    powerName : actions.RESEARCH,
    category : getCategory("TECHNOLOGY"),
    powerAction : actions.draw,
    isTargetRequired : false
  },
  {
    powerName : actions.PRODUCE,
    category : getCategory("ECONOMY"),
    powerAction : actions.noAction,
    isTargetRequired : false
  },
  {
    powerName : actions.ARMY,
    category : getCategory("MILITARY"),
    powerAction : actions.noAction,
    isTargetRequired : false
  }
];

export const getPower = (powerName) => powerLibrairy.filter((element) => (element.powerName === powerName) )[0];

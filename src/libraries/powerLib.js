import * as actions from "../actions";

// FIXME color scheme should be extracted to a proper file
// FIXME need an entity for Category={name,index,color,altColor}
const powerCategoryLibrairy = [
   {
    name : "EXPLORATION",
    index : 0,
    color : "#00BF32",
    altColor: "#64DF85"
  },
  {
    name : "TECHNOLOGY",
    index : 1,
    color : "#4212AF",
    altColor: "#8D6DD7"
  },
  {
    name : "ECONOMY",
    index : 2,
    color : "#FFDA00",
    altColor: "#FFEB73"
  },
  {
    name : "MILITARY",
    index : 3,
    color : "#FF1E00",
    altColor: "#FF8373"
  }
];

export function getCategory(categoryName){
  return powerCategoryLibrairy.filter((element)=>(element.name === categoryName))[0];
};

//FIXME need an entity for Power={powerName,category,powerAction,powerProps}
const defaultPowerLibrairy = [
  {
    powerName : actions.EXPLORE,
    category : getCategory("EXPLORATION"),
    powerAction : actions.discoverCell,
    cost : 0,
    powerProps : {
      isTargetRequired : true
    }
  },
  {
    powerName : actions.RESEARCH,
    category : getCategory("TECHNOLOGY"),
    powerAction : actions.draw,
    cost : 0,
    powerProps : {
      isTargetRequired : false
      }
    },
  {
    powerName : actions.PRODUCE,
    category : getCategory("ECONOMY"),
    powerAction : actions.produce,
    cost : 0,
    powerProps : {
      isTargetRequired : false,
      quantity : 1
    }
  },
  {
    powerName : actions.ARMY,
    category : getCategory("MILITARY"),
    powerAction : actions.noAction,
    cost : 0,
    powerProps : {
      isTargetRequired : false
      }
    }
];

//FIXME Need an entity for PowerCase={categoryName,defaultPower,isSelected,isTapped,card}
export function getPowerCaseTemplate(categoryName) {
  return {
    categoryName: categoryName,
    defaultPower: defaultPowerLibrairy.filter((element) => (element.category.name === categoryName) )[0],
    isSelected: false,
    isTapped: false,
    card: null
  }

};

export const generatePowerCase = (powerName) => {
  const powerCaseTemplate = getPowerCaseTemplate(powerName);
  return{
    categoryName :powerCaseTemplate.categoryName,
    defaultPower: powerCaseTemplate.defaultPower,
    isSelected: powerCaseTemplate.isSelected,
    isTapped: powerCaseTemplate.isTapped,
    card: powerCaseTemplate.card
  }

};

import * as actions from "../actions";

const TAPPED_COLOR = "#696969";
const TAPPED_ALT_COLOR = "#D3D3D3";

// FIXME color scheme should be extracted to a proper file
// FIXME need an entity for Category={name,index,color,altColor}
const powerCategoryLibrairy = [
   {
    name : "EXPLORATION",
    index : 0,
    color : "#00BF32",
    altColor: "#64DF85",
    tappedColor: TAPPED_COLOR,
    tappedAltColor: TAPPED_ALT_COLOR
  },
  {
    name : "TECHNOLOGY",
    index : 1,
    color : "#4212AF",
    altColor: "#8D6DD7",
    tappedColor: TAPPED_COLOR,
    tappedAltColor: TAPPED_ALT_COLOR
  },
  {
    name : "ECONOMY",
    index : 2,
    color : "#FFDA00",
    altColor: "#FFEB73",
    tappedColor: TAPPED_COLOR,
    tappedAltColor: TAPPED_ALT_COLOR
  },
  {
    name : "MILITARY",
    index : 3,
    color : "#FF1E00",
    altColor: "#FF8373",
    tappedColor: TAPPED_COLOR,
    tappedAltColor: TAPPED_ALT_COLOR
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
      isTargetRequired : true,
      persistent : true,
      radius : 0
    }
  },
  {
    powerName : actions.RESEARCH,
    category : getCategory("TECHNOLOGY"),
    powerAction : actions.draw,
    cost : 0,
    powerProps : {
      isTargetRequired : false,
      persistent : true
      }
    },
  {
    powerName : actions.PRODUCE,
    category : getCategory("ECONOMY"),
    powerAction : actions.produce,
    cost : 0,
    powerProps : {
      isTargetRequired : false,
      persistent : true,
      quantity : 1
    }
  },
  {
    powerName : actions.ARMY,
    category : getCategory("MILITARY"),
    powerAction : actions.noAction,
    cost : 0,
    powerProps : {
      isTargetRequired : false,
      persistent : true
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

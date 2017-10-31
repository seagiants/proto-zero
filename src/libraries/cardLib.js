import random from "lodash.random";
import * as actions from "../actions";
import { getCategory } from "./powerLib.js"
import { hasSpecificBuilding } from "../engine/mapLogic.js"

//FIXME need entity mechanism. Card = power + cost, same entity or not ?
const cardLibrairy = [
  {
    powerName: "Vision",
    category: getCategory("EXPLORATION"),
    powerAction: actions.discoverCell,
    symbol: "vision",
    powerProps : {
      cost: 2,
      isTargetRequired : true,
      persistent: 0 ,
      radius: 1
      }
    },
  {
    powerName: "Radar",
    category: getCategory("EXPLORATION"),
    powerAction: actions.discoverCell,
    symbol: "vision",
    powerProps : {
      cost: 7,
      isTargetRequired : true,
      persistent: 0
      }
  },
  {
    powerName: "Factory",
    category: getCategory("ECONOMY"),
    powerAction: actions.build,
    symbol: "build",
    powerProps : {
      cost: 2,
      isTargetRequired : true,
      persistent: 0 ,
      build: "Factory"
      }
  },
  {
    powerName: "Nexus",
    category: getCategory("ECONOMY"),
    powerAction: actions.build,
    symbol: "build",
    powerProps : {
      cost: 4,
      isTargetRequired : true,
      persistent: 0 ,
      build: "Nexus"
      }
  },
  {
    powerName: "Missile",
    category: getCategory("ECONOMY"),
    powerAction: actions.fireMissile,
    symbol: "missile",
    checkConditions: (x,y,state) => hasSpecificBuilding(x,y,state,true),
    powerProps : {
      cost: 2,
      isTargetRequired : true,
      persistent: 0
      }
  },
  {
    powerName: "Roquette",
    category: getCategory("ECONOMY"),
    powerAction: actions.fireRocket,
    symbol: "missile",
    checkConditions : (x,y,state) => false,
    powerProps : {
      cost: 2,
      isTargetRequired : true,
      persistent: 0
      }
  },
  {
    powerName: "Increased Radar",
    category: getCategory("TECHNOLOGY"),
    powerAction: actions.enhancement,
    symbol: "enhancement",
    powerProps : {
      cost: 0,
      isTargetRequired : false,
      persistent: 0 ,
      enhancements : {
          "TECHNOLOGY" : {
            cost: 1
          },
          "EXPLORATION" : {
            radius: 1,
            cost: 1
          }
        }
      }
  },
  {
    powerName: "Enhanced Research",
    category: getCategory("TECHNOLOGY"),
    powerAction: actions.enhancement,
    symbol: "enhancement",
    powerProps : {
      cost: 0,
      isTargetRequired : false,
      persistent: 0 ,
      enhancements : {
          "TECHNOLOGY" : {
            cost: -1
          },
        }
      }
  }
];

export const generateCard = (cardTemplate) => {
  return {...cardTemplate};
};

export const randCard = () => cardLibrairy[random(cardLibrairy.length - 1)];

export const getCard = (name) => cardLibrairy.filter((element) => (element.powerName === name) )[0];

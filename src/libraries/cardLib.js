import random from "lodash.random";
import * as actions from "../actions";
import { getCategory } from "./powerLib.js"

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
      persistent : true,
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
      persistent : true
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
      persistent : true,
      build: "Factory"
      }
  },
  {
    powerName: "Missile",
    category: getCategory("ECONOMY"),
    powerAction: actions.fireMissile,
    symbol: "missile",
    powerProps : {
      cost: 2,
      isTargetRequired : true,
      persistent : true
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
      persistent : false,
      enhancements : {
          "TECHNOLOGY" : {
            cost: 1
          },
          "EXPLORATION" : {
            radius: 1
          }
        }
      }
  }
];

export const generateCard = (cardTemplate) => {
  return {...cardTemplate};
};

export const randCard = () => cardLibrairy[random(cardLibrairy.length - 1)];

export const getCard = (name) => cardLibrairy.filter((element) => (element.powerName === name) )[0];

import random from "lodash.random";
import * as actions from "../actions";
import { getCategory } from "./powerLib.js"

//FIXME need entity mechanism. Card = power + cost, same entity or not ?
const cardLibrairy = [
  {
    powerName: "Vision",
    cost: 2,
    category: getCategory("EXPLORATION"),
    powerAction: actions.discoverCell,
    powerProps : {
      isTargetRequired : true,
      persistent : true,
      radius: 1
      }
    },
  {
    powerName: "Radar",
    cost: 7,
    category: getCategory("EXPLORATION"),
    powerAction: actions.discoverCell,
    powerProps : {
      isTargetRequired : true,
      persistent : true
      }
  },
  {
    powerName: "Factory",
    cost: 2,
    category: getCategory("ECONOMY"),
    powerAction: actions.noAction,
    powerProps : {
      isTargetRequired : true,
      persistent : true
      }
  },
  {
    powerName: "Missile",
    cost: 2,
    category: getCategory("ECONOMY"),
    powerAction: actions.noAction,
    powerProps : {
      isTargetRequired : true,
      persistent : true
      }
  },
  {
    powerName: "Increased Radar",
    cost: 2,
    category: getCategory("TECHNOLOGY"),
    powerAction: actions.noAction,
    powerProps : {
      isTargetRequired : false,
      persistent : false
      }
  }
];

export const generateCard = (cardTemplate) => {
  return {
    powerName: cardTemplate.powerName,
    cost: cardTemplate.cost,
    category: cardTemplate.category,
    powerAction: cardTemplate.powerAction,
    powerProps : cardTemplate.powerProps
  };
};

export const randCard = () => cardLibrairy[random(cardLibrairy.length - 1)];

export const getCard = (name) => cardLibrairy.filter((element) => (element.powerName === name) )[0];

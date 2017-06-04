import random from "lodash.random";
import * as actions from "../actions";
import { getCategory } from "./powerLib.js"

const cardLibrairy = [
  {
    name: "Vision",
    cost: 2,
    color : "purple",
    powerAction: actions.discoverCell,
    category: getCategory("EXPLORATION"),
    isTargetRequired : true
  },
  {
    name: "Radar",
    cost: 7,
    color : "purple",
    powerAction: actions.discoverCell,
    category: getCategory("EXPLORATION"),
    isTargetRequired : true
  },
  {
    name: "Factory",
    cost: 2,
    color : "purple",
    powerAction: actions.noAction,
    category: getCategory("ECONOMY"),
    isTargetRequired : true
  },
  {
    name: "Missile",
    cost: 2,
    color : "purple",
    powerAction: actions.noAction,
    category: getCategory("ECONOMY"),
    isTargetRequired : true
  },
  {
    name: "Increased Radar",
    cost: 2,
    color : "purple",
    powerAction: actions.noAction,
    category: getCategory("TECHNOLOGY"),
    isTargetRequired : false
  }
];

export const randCard = () => cardLibrairy[random(cardLibrairy.length - 1)];

export const getCard = (name) => cardLibrairy.filter((element) => (element.name === name) )[0];

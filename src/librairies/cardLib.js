import random from "lodash.random";
import * as actions from "../actions";
import { getCategory } from "./powerLib.js"

const cardLibrairy = [
  {
    name: "Vision",
    cost: 2,
    color : "purple",
    cardPower: actions.discoverCell,
    category: getCategory("EXPLORATION")
  },
  {
    name: "Radar",
    cost: 7,
    color : "purple",
    cardPower: actions.discoverCell,
    category: getCategory("EXPLORATION")
  },
  {
    name: "Factory",
    cost: 2,
    color : "purple",
    cardPower: actions.noAction,
    category: getCategory("ECONOMY")
  },
  {
    name: "Missile",
    cost: 2,
    color : "purple",
    cardPower: actions.noAction,
    category: getCategory("ECONOMY")
  },
  {
    name: "Increased Radar",
    cost: 2,
    color : "purple",
    cardPower: actions.noAction,
    category: getCategory("TECHNOLOGY")
  }
];

export const randCard = () => cardLibrairy[random(cardLibrairy.length - 1)];

export const getCard = (name) => cardLibrairy.filter((element) => (element.name === name) )[0];

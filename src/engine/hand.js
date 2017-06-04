/*import random from "lodash.random";
import { discoverCell } from "../actions"

export const generateCard = (name, cost, type, action) => {
  return {
    name: name,
    cost: cost,
    color : "purple",
    h : 30,
    w : 30,
    selected: false,
    action: action,
    type : type
  };
};

const cards = [
  generateCard("Vision", 2, "explore", discoverCell),
  generateCard("Radar", 7, "explore"),
  generateCard("Factory", 5, "produce"),
  generateCard("Missile", 8, "produce"),

];

const randCard = () => cards[random(cards.length - 1)];

export const generateHand = size => {
  return Array.from({ length: size }, _ => randCard());
};
*/

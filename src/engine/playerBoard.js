import random from "lodash.random";
import { generatePowerBoard, generatePower } from "../librairies/powerLib.js"

export const emptyBoard = {
  h:60,
  w:90
};

export const generateCard = (name, cost, cardPower) => {
  return {
    name: name,
    cost: cost,
    color : "purple",
    selected: false,
    cardPower: cardPower,
    type: cardPower.category.name
  };
};

const cards = [
  generateCard("Vision", 2, generatePower("EXPLORE")),
  generateCard("Radar", 7, generatePower("EXPLORE")),
  generateCard("Factory", 5, generatePower("PRODUCE")),
  generateCard("Missile", 8, generatePower("PRODUCE")),

];

const randCard = () => cards[random(cards.length - 1)];

export const drawCards = size => {
  return Array.from({ length: size }, _ => randCard());
};
/*
const powerColor = (powerType) => {
  switch (powerType) {
    case EXPLORE:
      return 'green';
    case RESEARCH:
      return 'blue';
    case PRODUCE:
      return 'yellow';
    default:
      return 'black';
  }
};

const generatePower = (powerType,powerAction) => {
  return{
    type : powerType,
    card : null,
    h : 30,
    w : 30,
    color : powerColor(powerType),
    power: powerAction
  };
};




export const generatePowerBoard = () => ([generatePower(EXPLORE,explore),generatePower(RESEARCH,research),generatePower(PRODUCE,produce)]);

export const powerIndex = (action) => {
  switch (action) {
    case EXPLORE:
      return 0;
    case RESEARCH:
      return 1;
    case PRODUCE:
      return 2;
    case 'attack':
      return 3;
    default:
        return undefined;
  }
}
*/
export const generateBoard = () => {
  return{
    powerBoard : generatePowerBoard(),
    drawBoard : null
  };
};

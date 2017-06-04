import random from "lodash.random";
import { discoverCell, noAction } from "../actions"

export const emptyBoard = {
  h:60,
  w:90
};

export const generateCard = (name, cost, type, cardPower) => {
  console.log(cardPower);
  return {
    name: name,
    cost: cost,
    color : "purple",
    selected: false,
    cardPower: cardPower(),
    type: type

  };
};

const cards = [
  generateCard("Vision", 2,"explore", discoverCell),
  generateCard("Radar", 7,"explore", noAction),
  generateCard("Factory", 5,"produce", noAction),
  generateCard("Missile", 8,"produce", noAction),

];

const randCard = () => cards[random(cards.length - 1)];

export const drawCards = size => {
  return Array.from({ length: size }, _ => randCard());
};

const powerColor = (powerType) => {
  switch (powerType) {
    case 'explore':
      return 'green';
    case 'research':
      return 'blue';
    case 'produce':
      return 'yellow';
    default:
      return 'black';
  }
};

const generatePower = (powerType) => {
  return{
    type : powerType,
    card : null,
    h : 30,
    w : 30,
    color : powerColor(powerType)
  };
};




export const generatePowerBoard = () => ([generatePower('explore'),generatePower('research'),generatePower('produce')]);

export const powerIndex = (action) => {
  switch (action) {
    case 'explore':
      return 0;
    case 'research':
      return 1;
    case 'produce':
      return 2;
    case 'attack':
      return 3;
    default:
        return undefined;
  }
}
export const generateBoard = () => {
  return{
    powerBoard : generatePowerBoard(),
    drawBoard : null
  };
};

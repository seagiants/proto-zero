import random from "lodash.random";
import { discoverCell } from "../actions"

export const generateCard = (name, cost, action) => {
  return {
    name: name,
    cost: cost,
    color : "purple",
    h : 30,
    w : 30,
    selected: false,
    action: action
  };
};

const cards = [
  generateCard("Vision", 2, discoverCell),
  generateCard("Radar", 7),
  generateCard("Factory", 5),
  generateCard("Missile", 8),

];

const randCard = () => cards[random(cards.length - 1)];

export const generateHand = size => {
  return Array.from({ length: size }, _ => randCard());
};

const actionColor = (actionType) => {
  switch (actionType) {
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

const generatePlayerAction = (actionType) => {
  return{
    type : actionType,
    card : null,
    h : 30,
    w : 30,
    color : actionColor(actionType)
  };
};




export const generateActionBoard = () => ([generatePlayerAction('explore'),generatePlayerAction('research'),generatePlayerAction('produce')]);

export const generateBoard = () => {
  return{
    actionBoard : generateActionBoard(),
    drawBoard : generateHand(3)
  };
};

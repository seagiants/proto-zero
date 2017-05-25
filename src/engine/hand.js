import random from "lodash.random";

export const generateCard = (name, cost) => {
  return {
    name: name,
    cost: cost,
    color : "purple",
    h : 30,
    w : 30,
    selected: false
  };
};

const cards = [
  generateCard("Vision", 2),
  generateCard("Radar", 7),
  generateCard("Factory", 5),
  generateCard("Missile", 8),

];

const randCard = () => cards[random(cards.length - 1)];

export const generateHand = size => {
  return Array.from({ length: size }, _ => randCard());
};

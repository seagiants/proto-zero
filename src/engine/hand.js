import random from "lodash.random";

const cards = [
  { name: "Vision", cost: 2 },
  { name: "Forge", cost: 5 },
  { name: "Factory", cost: 6 },
  { name: "Missile", cost: 10 },
  { name: "Spy", cost: 8 }
];

const randCard = () => cards[random(cards.length - 1)];

export const generateHand = size => {
  return Array.from({length: size}, _ => randCard());
};

import { generatePowerCase } from "../libraries/powerLib.js";
import { generateCard, randCard } from "../libraries/cardLib.js";

export const emptyBoard = {
  h: 60,
  w: 90
};

export const generatePowerBoard = () => [
  generatePowerCase("EXPLORATION"),
  generatePowerCase("TECHNOLOGY"),
  generatePowerCase("ECONOMY"),
  generatePowerCase("MILITARY")
];

export const drawCards = size => {
  return Array.from({ length: size }, _ => generateCard(randCard()));
};

export const generateBoard = () => {
  return {
    powerBoard: generatePowerBoard(),
    drawBoard: null,
    resourceCounter: 0
  };
};

import { getPower } from "../librairies/powerLib.js"
import { randCard } from "../librairies/cardLib.js"

export const emptyBoard = {
  h:60,
  w:90
};

export const generatePower = (powerName) => {
  const powerTemplate = getPower(powerName);
  return{
    powerName :powerTemplate.powerName,
    category : powerTemplate.category,
    powerAction : powerTemplate.powerAction,
    isTargetRequired : powerTemplate.isTargetRequired
  };
};

export const generatePowerBoard = () => ([generatePower("EXPLORE"),generatePower("RESEARCH"),generatePower("PRODUCE"), generatePower("ARMY")]);

export const generateCard = (cardTemplate) => {
  return {
    name: cardTemplate.name,
    cost: cardTemplate.cost,
    color : cardTemplate.color,
    powerAction: cardTemplate.powerAction,
    category: cardTemplate.category,
    isTargetRequired : cardTemplate.isTargetRequired
  };
};

export const drawCards = size => {
  return Array.from({ length: size }, _ => generateCard(randCard()));
};

export const generateBoard = () => {
  return{
    powerBoard : generatePowerBoard(),
    drawBoard : null
  };
};

import { getPowerCaseTemplate } from "../libraries/powerLib.js"
import { randCard } from "../libraries/cardLib.js"

export const emptyBoard = {
  h:60,
  w:90
};

export const generatePowerCase = (powerName) => {
  const powerCaseTemplate = getPowerCaseTemplate(powerName);
  return{
    powerName :powerCaseTemplate.powerName,
    category : powerCaseTemplate.category,
    powerAction : powerCaseTemplate.powerAction,
    powerProps : powerCaseTemplate.powerProps
  };
};

export const generatePowerBoard = () => ([generatePowerCase("EXPLORE"),generatePowerCase("RESEARCH"),generatePowerCase("PRODUCE"), generatePowerCase("ARMY")]);

export const generateCard = (cardTemplate) => {
  return {
    name: cardTemplate.name,
    cost: cardTemplate.cost,
    color : cardTemplate.color,
    powerAction: cardTemplate.powerAction,
    category: cardTemplate.category,
    powerProps : cardTemplate.powerProps
  };
};

export const drawCards = size => {
  return Array.from({ length: size }, _ => generateCard(randCard()));
};

export const generateBoard = () => {
  return{
    powerBoard : generatePowerBoard(),
    drawBoard : null,
    resourceCounter : 0
  };
};

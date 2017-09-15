/*
Define the structure of a card.
*/
// @flow
import { Category } from "./category.js";

/* Card definition */
type Card = {
  powerName: string,
  cost: number,
  category: Category,
  powerAction: function,  //FIXME should be named powerActionCreator
  isTargetRequired?: boolean,  //FIXME we should have another type definition for that ?
};

/* Card creation */
export function generateCard(cardData: any): Card {
  return {
    powerName: cardData.powerName,
    cost: cardData.cost,
    category: cardData.category,
    powerAction: cardData.powerAction,
  };
};

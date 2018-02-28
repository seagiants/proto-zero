import { DRAW } from "../actions";
import { generateDeck, drawCards } from "../engine/deckLogic";

const initialState = generateDeck();

export const deckState = (state = initialState, action) => {
  switch (action.type) {
    case DRAW:
      return drawCards(3, state);
    default:
      return state;
  }
};

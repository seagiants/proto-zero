import { DRAW, EVOLVE } from "../actions";
import { generateDeck, drawCards, addUpgradedCardToDraw } from "../engine/deckLogic";

const initialState = generateDeck();

export const deckState = (state = initialState, action) => {
  switch (action.type) {
    case DRAW:
      return drawCards(3, state);
    case EVOLVE:
      return {
        ...state,
        draw: addUpgradedCardToDraw(state.draw, action.upgradedCard)
      };
    default:
      return state;
  }
};

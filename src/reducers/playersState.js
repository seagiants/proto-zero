import {SELECTED_CARD} from "../actions";
import { generateHand } from "../engine";

const initialState = {
  playerOne: {
    name: "Bibi",
    hand: generateHand(5)
  },
  playerTwo: {
    name: "BustedKeaton",
    hand: generateHand(5)
  }
};

export const playersState = (state = initialState, action) => {
  switch (action.type) {
    case SELECTED_CARD:
      return {...state, selectedCard: action.cardType}
    default:
      return state;
  }
};

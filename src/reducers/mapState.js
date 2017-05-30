import { GENERATE_MAP, DISCOVER_CELL, SELECTED_CARD } from "../actions";
import { generateMap } from "../engine";

const initialState = {
  gameMap: generateMap(20, 20),
  selectedCard: null,
  selectedCardIndex: null
};

export const mapState = (state = initialState, action) => {
  switch (action.type) {
    case GENERATE_MAP:
      return { ...state, gameMap: generateMap(action.x, action.y) };
    case DISCOVER_CELL:
          let modifiedGameMap = state.gameMap;
          modifiedGameMap[action.x][action.y].hidden = false;
          return { ...state, gameMap: modifiedGameMap, selectedCard: null, selectedCardIndex: null };
    case SELECTED_CARD:
        let newSelectedCardIndex = state.selectedCardIndex === action.cardIndex ? null : action.cardIndex;
        let newSelectedCard = newSelectedCardIndex === null ?  null : action.card;
        return { ...state, selectedCard: newSelectedCard, selectedCardIndex: newSelectedCardIndex };
    default:
      return state;
  }
};

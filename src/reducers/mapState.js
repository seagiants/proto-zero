import { GENERATE_MAP, DISCOVER_CELL, POWER_SELECTION, noAction } from "../actions";
import { generateMap } from "../engine";

const initialState = {
  gameMap: generateMap(20, 20),
  selectedPower : noAction
};

export const mapState = (state = initialState, action) => {
  switch (action.type) {
    case GENERATE_MAP:
      return { ...state, gameMap: generateMap(action.x, action.y) };
    case DISCOVER_CELL:
          let modifiedGameMap = state.gameMap;
          modifiedGameMap[action.x][action.y].hidden = false;
          return { ...state, gameMap: modifiedGameMap, selectedPower: noAction };
    case POWER_SELECTION:
          return { ...state, selectedPower: action.power.card == null ? action.power.type : action.power.card.cardPower };
    default:
      return state;
  }
};

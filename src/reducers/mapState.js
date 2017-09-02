import {
  GENERATE_MAP,
  DISCOVER_CELL,
  POWER_SELECTION,
  noAction
} from "../actions";
import { generateMap } from "../engine";

const initialState = {
  gameMap: generateMap(20, 20),
  selectedPower: noAction
};

const showCell = (gameMap, x, y) => {
  return gameMap.map((row, index) => {
    if (index !== x) {
      return row;
    } else {
      return row.map((cell, index) => {
        if (index !== y) {
          return cell;
        } else {
          return {
            ...cell,
            hidden: false
          };
        }
      });
    }
  });
};

export const mapState = (state = initialState, action) => {
  switch (action.type) {
    case GENERATE_MAP:
      return { ...state, gameMap: generateMap(action.x, action.y) };
    case DISCOVER_CELL:
      return {
        ...state,
        gameMap: showCell(state.gameMap, action.x, action.y),
        selectedPower: noAction
      };
    case POWER_SELECTION:
      let newSelectPower =
        action.power.card == null
          ? action.power.powerAction
          : action.power.card.powerAction;
      return { ...state, selectedPower: newSelectPower };
    default:
      return state;
  }
};

import {
  GENERATE_MAP,
  DISCOVER_CELL,
  POWER_SELECTION,
  STORE_MAP
} from "../actions";
import { generateMap } from "../engine";
import { getActivePower } from "../engine/powerLogic";
import { mapDimensions } from "../constants";

const initialState = {
  gameMap: generateMap(mapDimensions.width, mapDimensions.height),
  activePlayer: "playerOne"
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

export const mapState = (state = {}, action) => {
  switch (action.type) {
    //case GENERATE_MAP:
    //  return { ...state, gameMap: generateMap(action.x, action.y) };
    case STORE_MAP:
      return { ...state, gameMap: action.map };
    case DISCOVER_CELL:
      return {
        ...state,
        gameMap: showCell(state.gameMap, action.x, action.y),
        selectedPower: null
      };
    case POWER_SELECTION:
      return { ...state, selectedPower: getActivePower(action.powerCase) };
    default:
      return state;
  }
};

import { DISCOVER_CELL, POWER_SELECTION, STORE_MAP } from "../actions";
import { getActivePower } from "../engine/powerLogic";

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

export const mapState = (state = { activePlayer: "playerOne" }, action) => {
  switch (action.type) {
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

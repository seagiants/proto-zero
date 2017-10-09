import { DISCOVER_CELL, POWER_SELECTION, STORE_MAP, BUILD, REFRESH_POWER_BOARD, FIRE_MISSILE } from "../actions";
import { getActivePower } from "../engine/powerLogic";
import { getBuilding, generateBuilding } from "../libraries/buildingLib.js";
const showCell = (gameMap, x, y,radius) => {
  return gameMap.map((row, index) => {
    if (Math.abs(x-index) > radius) {
      return row;
    } else {
      return row.map((cell, index) => {
        if (Math.abs(y-index) > radius) {
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

const buildOnCell = (gameMap,x,y,building) => {
  return gameMap.map((row, index) => {
    if (x!==index) {
      return row;
    } else {
      return row.map((cell, index) => {
        if (y!==index) {
          return cell;
        } else {
          return {
            ...cell,
            content: generateBuilding(getBuilding(building))};
        }
      });
    }
  });
}

const updateMapAfterFire = (map,x,y) => {
  return map.map((row, index) => {
    if (x!==index) {
      return row;
    } else {
      return row.map((cell, index) => {
        if (y!==index) {
          return cell;
        } else {
          return {
            ...cell,
            content: null};
        }
      });
    }
  });
}
export const mapState = (state = { activePlayer: "playerOne" }, action) => {
  switch (action.type) {
    case STORE_MAP:
      return { ...state, gameMap: action.map };
    case DISCOVER_CELL:
      return {
        ...state,
        gameMap: showCell(state.gameMap, action.x, action.y,action.radius),
        selectedPower: null
      };
    case BUILD:
      return {
        ...state,
        gameMap: buildOnCell(state.gameMap, action.x, action.y,action.build),
        selectedPower: null
      };
    case POWER_SELECTION:
      return { ...state, selectedPower: getActivePower(action.powerCase) };
    case REFRESH_POWER_BOARD:
      return {...state, selectedPower: null}
    case FIRE_MISSILE:
      return {...state, gameMap: updateMapAfterFire(state.gameMap,action.x,action.y)}
    default:
      return state;
  }
};

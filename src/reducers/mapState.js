import {
  DISCOVER_CELL,
  POWER_SELECTION,
  STORE_MAP,
  BUILD,
  REFRESH_POWER_BOARD,
  FIRE_MISSILE,
  FIRE_ROCKET
} from "../actions";
import { getActivePower } from "../engine/powerLogic";
import { getBuilding, generateBuilding } from "../libraries/buildingLib.js";
import { getCellNeighboursWithSpecificBuilding } from "../engine/mapLogic.js"

const showCell = (gameMap, x, y, radius) => {
  return gameMap.map(cell => {
    if (Math.abs(x - cell.x) > radius) {
      return cell;
    } else {
      if (Math.abs(y - cell.y) > radius) {
        return cell;
      } else {
        return {
          ...cell,
          hidden: false
        };
      }
    }
  });
};

const buildOnCell = (gameMap, x, y, building) => {
  return gameMap.map(cell => {
    if (x !== cell.x) {
      return cell;
    } else {
      if (y !== cell.y) {
        return cell;
      } else {
        return {
          ...cell,
          content: generateBuilding(getBuilding(building))
        };
      }
    }
  });
};

const updateMapAfterFire = (gameMap, x, y) => {
  return gameMap.map(cell => {
    if (x !== cell.x) {
      return cell;
    } else {
      if (y !== cell.y) {
        return cell;
      } else {
        return {
          ...cell,
          content: null
        };
      }
    }
  });
};

//To be continued.
const updateMapAfterRocketFire = (gameMap, x, y) => {
  const start = getCellNeighboursWithSpecificBuilding(x,y,gameMap, "Nexus")
  const xMove = x - start.x;
  const yMove = y - start.y;
  let newMap = gameMap.slice(0);
  let keepGoing = true;
  let step = 1;
  let stepCell = null;
  if(y === start.y){
      step = xMove;
      while (keepGoing) {
        console.log(step);
        stepCell = newMap.filter(cell => (cell.x === start.x + step)&&(cell.y === start.y) )[0];
        console.log(stepCell);
        if(stepCell !== null && stepCell !== undefined){
          step+= xMove;
          keepGoing = stepCell.cellType !== "mountain" && (stepCell.content === undefined || stepCell.content === null);
          stepCell.content = null;
          stepCell.hidden = false;
        }else {
          keepGoing = false;
        }
      }
    }else{
      step = yMove;
      while (keepGoing) {
        console.log(step);
        stepCell = newMap.filter(cell => (cell.y === start.y + step)&&(cell.x === start.x) )[0];
        console.log(stepCell);
        if(stepCell !== null && stepCell !== undefined){
          step+= yMove;
          keepGoing = stepCell.cellType !== "mountain" && (stepCell.content === undefined || stepCell.content === null);
          stepCell.content = null;
          stepCell.hidden = false;
        }else {
          keepGoing = false;
        }
      }
    }
  return newMap;
};

export const mapState = (state = { activePlayer: "playerOne" }, action) => {
  switch (action.type) {
    case STORE_MAP:
      return {
        ...state,
        gameMap: action.map,
        mapWidth: action.mapWidth,
        mapHeight: action.mapHeight
      };
    case DISCOVER_CELL:
      return {
        ...state,
        gameMap: showCell(state.gameMap, action.x, action.y, action.radius),
        selectedPower: null
      };
    case BUILD:
      return {
        ...state,
        gameMap: buildOnCell(state.gameMap, action.x, action.y, action.build),
        selectedPower: null
      };
    case POWER_SELECTION:
      return { ...state, selectedPower: getActivePower(action.powerCase) };
    case REFRESH_POWER_BOARD:
      return { ...state, selectedPower: null };
    case FIRE_MISSILE:
      return {
        ...state,
        gameMap: updateMapAfterFire(state.gameMap, action.x, action.y),
        selectedPower: null
      };
    case FIRE_ROCKET:
    return {
      ...state,
      gameMap: updateMapAfterRocketFire(state.gameMap,action.x,action.y),
      selectedPower: null
    };
    default:
      return state;
  }
};

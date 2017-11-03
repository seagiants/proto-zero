import {
  DISCOVER_CELL,
  POWER_SELECTION,
  STORE_MAP,
  BUILD,
  REFRESH_POWER_BOARD,
  FIRE_MISSILE,
  FIRE_ROCKET,
  UPGRADE_BUILDING
} from "../actions";
import { getActivePower } from "../engine/powerLogic";
import { getBuilding, generateBuilding } from "../libraries/buildingLib.js";
import { getCellNeighboursWithSpecificBuilding } from "../engine/mapLogic.js";
import { enhanceProps } from "../engine";

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

const updateCellContentAfterFire = (content) =>{
  if(
    content !== undefined && content != null && content.buildingProps !== undefined && content.buildingProps !==null && content.buildingProps.shield > 0
  )
  {
    return {
      ...content, buildingProps:{
        ...content.buildingProps, shield: content.buildingProps.shield - 1
      }
    };
  }else{
    return null;
  }
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
          content: updateCellContentAfterFire(cell.content)
        };
      }
    }
  });
};

//Discover cells on line 'til mountain or building encounter, destroy building encountered.
//FIXME need a specific implementation when there are multiple possible starting points.
const updateMapAfterRocketFire = (gameMap, x, y) => {
  //get rocket starting point.
  const start = getCellNeighboursWithSpecificBuilding(x,y,gameMap, "Nexus")
  //define direction movements (0 = no movement, 1 = to the right or bottom, -1 = to the left or top)
  const xMove = x - start.x;
  const yMove = y - start.y;
  //duplicating gameMap to return a new object
  let newMap = gameMap.map(cell => {return{...cell}});
  let keepGoing = true;
  let xStep = xMove;
  let yStep = yMove;
  let stepCell = null;
  let filterKey = cell => (cell.x === start.x + xStep)&&(cell.y === start.y + yStep);
    while (keepGoing) {
      //current cell
      stepCell = newMap.filter(filterKey)[0];
      //check if any cell is matched, if not end, 'cause rocket went off map
      if(stepCell !== null && stepCell !== undefined){
        //EndConditions based on mountain or building encounter
        keepGoing = stepCell.cellType !== "mountain" && (stepCell.content === undefined || stepCell.content === null);
        stepCell.content = updateCellContentAfterFire(stepCell.content);
        stepCell.hidden = false;
        xStep+= xMove;
        yStep+= yMove;
      }else {
        //Rocket went off map.
        keepGoing = false;
      }
    }
  return newMap;
};

const upgradeBuildingOnCell = (gameMap,x,y,upgradeBuilding) => {
  const upgrade = getBuilding(upgradeBuilding.build).buildingProps;
  console.log(upgradeBuilding.build);
  console.log(upgrade);
  return gameMap.map(cell => {
    if (x !== cell.x) {
      return cell;
    } else {
      if (y !== cell.y) {
        return cell;
      } else {
        return {
          ...cell,
          content: {
            ...cell.content,
            buildingProps: enhanceProps(cell.content.buildingProps,upgrade)
          }
        };
      }
    }
  });
}

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
    case UPGRADE_BUILDING:
      return {
        ...state,
        gameMap: upgradeBuildingOnCell(state.gameMap, action.x, action.y, action.upgrade),
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

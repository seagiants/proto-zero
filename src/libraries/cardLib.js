import * as actions from "../actions";
import { getCategory } from "./powerLib.js";
import {
  hasSpecificBuilding,
  hasNeighboursSpecificBuilding
} from "../engine/mapLogic.js";

//FIXME need entity mechanism. Card = power + cost, same entity or not ?
export const cardLibrary = [
  {
    powerName: "Vision",
    category: getCategory("EXPLORATION"),
    powerAction: actions.discoverCell,
    symbol: "vision",
    isTargetRequired: true,
    cost: 2,
    powerProps: {
      persistent: 0,
      radius: 1
    }
  },
  {
    powerName: "Radar",
    category: getCategory("EXPLORATION"),
    powerAction: actions.discoverCell,
    symbol: "vision",
    isTargetRequired: true,
    cost: 7,
    powerProps: {
      persistent: 0
    }
  },
  {
    powerName: "Factory",
    category: getCategory("ECONOMY"),
    powerAction: actions.build,
    symbol: "build",
    isTargetRequired: true,
    cost: 2,
    powerProps: {
      persistent: 0,
      build: "Factory"
    }
  },
  {
    powerName: "Nexus",
    category: getCategory("ECONOMY"),
    powerAction: actions.build,
    symbol: "build",
    isTargetRequired: true,
    cost: 4,
    powerProps: {
      persistent: 0,
      build: "Nexus"
    }
  },
  {
    powerName: "Missile",
    category: getCategory("MILITARY"),
    powerAction: actions.fireMissile,
    symbol: "missile",
    checkConditions: (x, y, state) =>
      hasSpecificBuilding(x, y, state.mapState.gameMap, true),
    isTargetRequired: true,
    cost: 2,
    powerProps: {
      persistent: 0,
      evolution: "Missile 2"
    }
  },
  {
    powerName: "Rocket",
    category: getCategory("MILITARY"),
    powerAction: actions.fireRocket,
    symbol: "missile",
    checkConditions: (x, y, state) =>
      hasNeighboursSpecificBuilding(x, y, state.mapState.gameMap, "Nexus"),
    isTargetRequired: true,
    cost: 2,
    powerProps: {
      persistent: Infinity
    }
  },
  {
    powerName: "Increased Radar",
    category: getCategory("TECHNOLOGY"),
    powerAction: actions.enhancement,
    symbol: "enhancement",
    isTargetRequired: false,
    cost: 0,
    powerProps: {
      persistent: 0,
      enhancements: {
        TECHNOLOGY: {
          cost: 1
        },
        EXPLORATION: {
          radius: 1,
          cost: 1
        }
      }
    }
  },
  {
    powerName: "Enhanced Research",
    category: getCategory("TECHNOLOGY"),
    powerAction: actions.enhancement,
    symbol: "enhancement",
    isTargetRequired: false,
    cost: 0,
    powerProps: {
      persistent: 0,
      enhancements: {
        TECHNOLOGY: {
          cost: -1
        }
      }
    }
  },
  {
    powerName: "Shield",
    category: getCategory("MILITARY"),
    powerAction: actions.upgradeBuilding,
    symbol: "build",
    isTargetRequired: true,
    cost: 2,
    powerProps: {
      persistent: 0,
      build: "Shield"
    }
  }
];

export const upgradedCardLibrary = [
  {
    powerName: "Missile 2",
    category: getCategory("MILITARY"),
    powerAction: actions.fireMissile,
    symbol: "missile",
    checkConditions: (x, y, state) =>
      hasSpecificBuilding(x, y, state.mapState.gameMap, true),
    isTargetRequired: true,
    cost: 2,
    powerProps: {
      persistent: 1
    }
  }
];

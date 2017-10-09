import { generateBoard, drawCards } from "../engine";
import {
  REFRESH_POWER_BOARD,
  DRAW,
  SELECTED_CARD,
  PRODUCE,
  TAP_POWER_CASE,
  POWER_SELECTION,
  UPDATE_RESOURCE_COUNTER
} from "../actions";

const initialState = {
  playerOne: {
    name: "Bibi",
    playerBoard: generateBoard()
  },
  playerTwo: {
    name: "BustedKeaton",
    playerBoard: generateBoard()
  }
};

const addingCardToPowerBoard = (powerBoard, card) => {
  return powerBoard.map(powerCase => {
    if (powerCase.categoryName !== card.category.name) {
      return { ...powerCase };
    }
    return {
      ...powerCase,
      card: card
    };
  });
};

const refreshingPowerCases = powerBoard => {
  return powerBoard.map(powerCase => {
    return { ...powerCase, isTapped: false, isSelected: false };
  });
};

const selectingPowerCaseFromPowerBoard = (
  powerBoard,
  categoryName,
  newStatus = true
) => {
  return powerBoard.map(powerCase => {
    if (powerCase.categoryName === categoryName) {
      return { ...powerCase, isSelected: newStatus };
    } else {
      return { ...powerCase };
    }
  });
};
//FIXME Mixing Tapping Case and Discarding non-peristent Card
const togglingPowerCaseFromPowerBoard = (
  powerBoard,
  categoryName,
  newStatus = true,persistent = true) => {
  return powerBoard.map(powerCase => {
    if (powerCase.categoryName === categoryName) {
      return {
        ...powerCase, isTapped: newStatus, isSelected: false, card: persistent ? powerCase.card : null
      };
    } else {
      return { ...powerCase, isSelected: false };
    }
  });
};

export const playersState = (state = initialState, action) => {
  switch (action.type) {
    case DRAW:
      return {
        ...state,
        [action.player]: {
          ...state[action.player],
          playerBoard: {
            ...state[action.player].playerBoard,
            drawBoard: drawCards(3)
          }
        }
      };
    case SELECTED_CARD:
      return {
        ...state,
        [action.player]: {
          ...state[action.player],
          playerBoard: {
            ...state[action.player].playerBoard,
            drawBoard: null,
            powerBoard: addingCardToPowerBoard(
              state[action.player].playerBoard.powerBoard,
              action.card
            )
          }
        }
      };
    case PRODUCE:
      let newResourceCounter =
        state[action.player].playerBoard.resourceCounter +
        action.powerProps.quantity;
      return {
        ...state,
        [action.player]: {
          ...state[action.player],
          playerBoard: {
            ...state[action.player].playerBoard,
            resourceCounter: newResourceCounter
          }
        }
      };

    case TAP_POWER_CASE:
      return {
        ...state,
        [action.player]: {
          ...state[action.player],
          playerBoard: {
            ...state[action.player].playerBoard,
            powerBoard: togglingPowerCaseFromPowerBoard(
              state[action.player].playerBoard.powerBoard,
              action.categoryName,
              true,
              action.persistent)
          }
        }
      };
    case REFRESH_POWER_BOARD:
      return {
        ...state,
        [action.player]: {
          ...state[action.player],
          playerBoard: {
            ...state[action.player].playerBoard,
            powerBoard: refreshingPowerCases(
              state[action.player].playerBoard.powerBoard
            )
          }
        }
      };
    case POWER_SELECTION:
      return {
        ...state,
        [action.player]: {
          ...state[action.player],
          playerBoard: {
            ...state[action.player].playerBoard,
            powerBoard: selectingPowerCaseFromPowerBoard(
              state[action.player].playerBoard.powerBoard,
              action.powerCase.categoryName,
              true
            )
          }
        }
      };
      case UPDATE_RESOURCE_COUNTER :
      return {...state,[action.player]: {
          ...state[action.player], playerBoard: {
            ...state[action.player].playerBoard, resourceCounter:state[action.player].playerBoard.resourceCounter-action.cost
          }
      }
    }
    /*  case DISCOVER_CELL :

        return {..., [action.player] : {
            ...state[action.player], playerBoard: {
              ......state[action.player].playerBoard,
            }
        }
      }*/
    default:
      return state;
  }
};

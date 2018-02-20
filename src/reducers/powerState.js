/* Reducers holding $powers$ state */
import { generateBoard, enhanceProps } from "../engine";
import {
  SELECTED_CARD,
  POWER_SELECTION,
  REFRESH_POWER_BOARD,
  TAP_POWER_CASE,
  ENHANCEMENT
} from "../actions";

// ----- State handling functions
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

const refreshCardStatus = card => {
  if (card.powerProps.persistent > 0) {
    return {
      ...card,
      powerProps: {
        ...card.powerProps,
        persistent: card.powerProps.persistent - 1
      }
    };
  } else {
    return null;
  }
};

const togglingPowerCaseFromPowerBoard = (
  powerBoard,
  categoryName,
  newStatus = true,
  persistent = Infinity
) => {
  return powerBoard.map(powerCase => {
    if (powerCase.categoryName === categoryName) {
      let card = powerCase.card;
      return {
        ...powerCase,
        isTapped: newStatus,
        isSelected: false,
        card:
          card === null || card === undefined ? null : refreshCardStatus(card)
      };
    } else {
      return { ...powerCase, isSelected: false };
    }
  });
};

const refreshingPowerCases = powerBoard => {
  return powerBoard.map(powerCase => {
    return { ...powerCase, isTapped: false, isSelected: false };
  });
};

const enhancePowerBoard = (powerBoard, enhancements) => {
  return powerBoard.map(powerCase => {
    if (
      enhancements[powerCase.categoryName] !== null &&
      enhancements[powerCase.categoryName] !== undefined
    ) {
      let enhancedPowerCaseProps = enhanceProps(
        powerCase.defaultPower.powerProps,
        enhancements[powerCase.categoryName]
      );
      return {
        ...powerCase,
        defaultPower: {
          ...powerCase.defaultPower,
          powerProps: enhancedPowerCaseProps
        }
      };
    } else {
      return { ...powerCase };
    }
  });
};

const initialState = {
  board: generateBoard().powerBoard // FIXME isolate the power board creation ?
};

// ----- State
export const powerState = (state = initialState, action) => {
  switch (action.type) {
    case SELECTED_CARD:
      return {
        ...state,
        board: addingCardToPowerBoard(state.board, action.card)
      };
    case POWER_SELECTION:
      return {
        ...state,
        board: selectingPowerCaseFromPowerBoard(
          state.board,
          action.powerCase.categoryName
        )
      };
    case REFRESH_POWER_BOARD:
      return {
        ...state,
        board: refreshingPowerCases(state.board)
      };
    case TAP_POWER_CASE:
      return {
        ...state,
        board: togglingPowerCaseFromPowerBoard(
          state.board,
          action.categoryName,
          true,
          action.persistent
        )
      };
    case ENHANCEMENT:
      return {
        ...state,
        board: enhancePowerBoard(state.board, action.powerProps.enhancements)
      };
    default:
      return state;
  }
};

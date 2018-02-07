/* Reducers holding $powers$ state */
import { generateBoard } from "../engine";
import {
  SELECTED_CARD,
  POWER_SELECTION,
  REFRESH_POWER_BOARD,
  TAP_POWER_CASE,
  ENHANCEMENT
} from "../actions";

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

const initialState = {
  board: generateBoard().powerBoard // FIXME isolate the power board creation ?
}

/* STATE */
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
    // TODO
    case TAP_POWER_CASE:
    //TODO
    case ENHANCEMENT:
    // TODO
    default:
      return state;
  }
};

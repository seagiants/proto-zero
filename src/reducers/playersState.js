import { generateBoard, addUpgradedCardToDraw } from "../engine";
import {
  PRODUCE,
  UPDATE_RESOURCE_COUNTER,
  EVOLVE,
  SETTING_AS_FIRST_PLAYER,
  SETTING_AS_SECOND_PLAYER
} from "../actions";

const initialState = {
  playerOne: {
    name: "Bibi",
    playerBoard: {
      resourceCounter: 0
    }

  },
  // FIXME delete player Two infos
  playerTwo: {
    name: "BustedKeaton",
    playerBoard: generateBoard()
  }
};

// ----- State
export const playersState = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCE:
      // TODO add to resourceState
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
    case UPDATE_RESOURCE_COUNTER:
      // TODO add to resourceState
      return {
        ...state,
        [action.player]: {
          ...state[action.player],
          playerBoard: {
            ...state[action.player].playerBoard,
            resourceCounter:
              state[action.player].playerBoard.resourceCounter - action.cost
          }
        }
      };
    case SETTING_AS_FIRST_PLAYER:
      return { ...state, playerNum: "playerOne" };
    case SETTING_AS_SECOND_PLAYER:
      return { ...state, playerNum: "playerTwo" };
    default:
      return state;
  }
};

import { generateBoard, drawCards, addUpgradedCardToDraw } from "../engine";
import {
  DRAW,
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
      deckState: generateBoard().deckState,
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
    case DRAW:
      return {
        ...state,
        [action.player]: {
          ...state[action.player],
          playerBoard: {
            ...state[action.player].playerBoard,
            deckState: drawCards(3, state[action.player].playerBoard.deckState)
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
    case UPDATE_RESOURCE_COUNTER:
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
    case EVOLVE:
      // TODO put in deckState
      return {
        ...state,
        [action.player]: {
          ...state[action.player],
          playerBoard: {
            ...state[action.player].playerBoard,
            deckState: {
              ...state[action.player].playerBoard.deckState,
              draw: addUpgradedCardToDraw(
                state[action.player].playerBoard.deckState.draw,
                action.upgradedCard
              )
            }
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

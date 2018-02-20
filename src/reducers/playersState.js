import {
  generateBoard,
  drawCards,
  enhanceProps,
  addUpgradedCardToDraw
} from "../engine";
import {
  REFRESH_POWER_BOARD,
  DRAW,
  SELECTED_CARD,
  PRODUCE,
  TAP_POWER_CASE,
  POWER_SELECTION,
  UPDATE_RESOURCE_COUNTER,
  ENHANCEMENT,
  EVOLVE,
  SETTING_AS_FIRST_PLAYER,
  SETTING_AS_SECOND_PLAYER
} from "../actions";

const initialState = {
  playerOne: {
    name: "Bibi",
    playerBoard: generateBoard()
  },
  // FIXME delete player Two infos
  playerTwo: {
    name: "BustedKeaton",
    playerBoard: generateBoard()
  }
};

// FIXME moved to powerState, to be deleted
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

// FIXME moved to powerState, to be deleted
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

//FIXME Mixing Tapping Case and Discarding non-peristent Card
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
              action.persistent
            )
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
    case ENHANCEMENT:
      return {
        ...state,
        [action.player]: {
          ...state[action.player],
          playerBoard: {
            ...state[action.player].playerBoard,
            powerBoard: enhancePowerBoard(
              state[action.player].playerBoard.powerBoard,
              action.powerProps.enhancements
            )
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

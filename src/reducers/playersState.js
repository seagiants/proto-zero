import { generateBoard, drawCards } from "../engine";
import { DRAW, SELECTED_CARD, PRODUCE } from "../actions"
const initialState = {
  playerOne: {
    name: "Bibi",
    playerBoard : generateBoard()

  },
  playerTwo: {
    name: "BustedKeaton",
    playerBoard : generateBoard()
  }
};

const addingCardToPowerBoard = (powerBoard,card) => {
  return powerBoard.map( (power) => {
        if(power.category.name!==card.category.name) {
            return power;
        }
        return {
            ...power, card : card
        };
    });
};

export const playersState = (state = initialState, action) => {

  switch (action.type) {
    case DRAW :
      return { ...state, [action.player] : {
          ...state[action.player], playerBoard : {
            ...state[action.player].playerBoard, drawBoard : drawCards(3)
        }
      }
    };
    case SELECTED_CARD :
      return { ...state, [action.player] : {
                ...state[action.player], playerBoard : {
                  ...state[action.player].playerBoard, drawBoard : null, powerBoard : addingCardToPowerBoard(state[action.player].playerBoard.powerBoard,action.card)
                }
            }
          };
    case PRODUCE :
      let newResourceCounter = state[action.player].playerBoard.resourceCounter + action.powerProps.quantity;
      return { ...state, [action.player] : {
          ...state[action.player], playerBoard : {
            ...state[action.player].playerBoard, resourceCounter : newResourceCounter
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
      console.log("Action not supported : "+action.type);
      return state;
  }
};

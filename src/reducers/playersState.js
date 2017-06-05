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
      //let modifiedPlayerState = state[action.player];
      //modifiedPlayerState.playerBoard.drawBoard = drawCards(3);
      return { ...state, [action.player] : {
          ...state[action.player], playerBoard : {
            ...state[action.player].playerBoard, drawBoard : drawCards(3)
          }
      }
    };
    case SELECTED_CARD :
      let modifiedPlayerState2 = state[action.player].playerBoard.powerBoard.filter((element)=>(element.category.name===action.card.category.name))[0];
      //modifiedPlayerState2.playerBoard.drawBoard = null;
      modifiedPlayerState2.card = action.card;
      return { ...state, [action.player] : {
                ...state[action.player], playerBoard : {
                  ...state[action.player].playerBoard, drawBoard : null, powerBoard : addingCardToPowerBoard(state[action.player].playerBoard.powerBoard,action.card)
                }
            }
          };
/*      return { ...state, [action.player] : {
          ...state[action.player], playerBoard : {
            ...state[action.player].playerBoard, drawBoard : null, powerBoard : {
              ...state[action.player].playerBoard.powerBoard, modifiedPlayerState2 : {
                ...state[action.player].playerBoard.powerBoard.filter((element)=>(element.category.name===action.card.category.name))[0], card : action.card
              }
            }
          }
      }
    };*/
    case PRODUCE :
      let newResourceCounter = state[action.player].playerBoard.resourceCounter + action.powerProps.quantity;
      return { ...state, [action.player] : {
          ...state[action.player], playerBoard : {
            ...state[action.player].playerBoard, resourceCounter : newResourceCounter
          }
        }
      }
    default:
      console.log("Action not supported : "+action.type);
      return state;
  }
};

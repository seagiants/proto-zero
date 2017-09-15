import { generateBoard, drawCards } from "../engine";
import { REFRESH_POWER_BOARD, DRAW, SELECTED_CARD, PRODUCE, TAP_POWER_CASE, POWER_SELECTION } from "../actions"
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
  return powerBoard.map( (powerCase) => {
        if(powerCase.categoryName!==card.category.name) {
            return {...powerCase};
        }
        return {
            ...powerCase, card : card
        };
    });
};

const refreshingPowerCases = (powerBoard) => {
  return powerBoard.map((powerCase)=>{
    return{...powerCase, isTapped: false, isSelected: false};
  });
};

const selectingPowerCaseFromPowerBoard = (powerBoard, categoryName,newStatus=true) => {
  return powerBoard.map((powerCase) => {
    if(powerCase.categoryName === categoryName){
      return {...powerCase, isSelected:newStatus};
    }else{ return {...powerCase}
    }
  })
};


const togglingPowerCaseFromPowerBoard = (powerBoard,categoryName,newStatus=true) => {
  return powerBoard.map((powerCase) => {
    if(powerCase.categoryName === categoryName){
      return {...powerCase, isTapped:newStatus, isSelected: false};
    }else{ return {...powerCase, isSelected: false}
    }
  })
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
      };

    case TAP_POWER_CASE :
      return { ...state, [action.player] : {
                ...state[action.player], playerBoard : {
                  ...state[action.player].playerBoard, powerBoard : togglingPowerCaseFromPowerBoard(state[action.player].playerBoard.powerBoard,action.categoryName,true)
                }
              }
            };
    case REFRESH_POWER_BOARD :
      return { ...state, [action.player] : {
                ...state[action.player], playerBoard : {
                  ...state[action.player].playerBoard, powerBoard : refreshingPowerCases(state[action.player].playerBoard.powerBoard)
                }
              }
            };
    case POWER_SELECTION :
    return { ...state, [action.player] : {
              ...state[action.player], playerBoard : {
                ...state[action.player].playerBoard, powerBoard : selectingPowerCaseFromPowerBoard(state[action.player].playerBoard.powerBoard, action.powerCase.categoryName,true)
              }
            }
          };
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

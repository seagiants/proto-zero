import { generateBoard, drawCards } from "../engine";
import { DRAW, SELECTED_CARD } from "../actions"
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

export const playersState = (state = initialState, action) => {

  switch (action.type) {
    case DRAW :
      let modifiedPlayerState = state[action.player];
      modifiedPlayerState.playerBoard.drawBoard = drawCards(3);
      return { ...state };
    case SELECTED_CARD :
      let modifiedPlayerState2 = state[action.player];
      console.log(action.card);
      modifiedPlayerState2.playerBoard.drawBoard = null;
      modifiedPlayerState2.playerBoard.powerBoard.filter((element)=>(element.category.name===action.card.category.name))[0].card = action.card;
      return { ...state};
    default:
      console.log("Action not supported : "+action.type);
      return state;
  }
};

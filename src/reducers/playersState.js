import { generateHand, generateActionBoard } from "../engine";

const initialState = {
  playerOne: {
    name: "Bibi",
    actionBoard : generateActionBoard(),
    drawBoard : generateHand(3)

  },
  playerTwo: {
    name: "BustedKeaton",
    actionBoard : generateActionBoard(),
    drawBoard : generateHand(3)
  }
};

export const playersState = (state = initialState, action) => {
  switch (action.type) {

    default:
      return state;
  }
};

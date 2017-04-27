import { generateHand } from "../engine";

const initialState = {
  playerOne: {
    name: "Bibi",
    hand: generateHand(5)
  },
  playerTwo: {
    name: "BustedKeaton",
    hand: generateHand(5)
  }
}

export const playersState = (state = initialState, action) => {
  switch(action.type){
    default:
      return state;
  }
}

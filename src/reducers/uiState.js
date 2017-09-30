/* This reducer holds the UI state */
import { SWITCH_TO_GAME_SCREEN } from "../actions";

const HOME_SCREEN = "HOME_SCREEN";
const GAME_SCREEN = "GAME_SCREEN";

export const uiState = (state = { activeScreen: HOME_SCREEN}, action) => {
  switch(action.type) {
    case SWITCH_TO_GAME_SCREEN:
      return {...state, activeScreen: GAME_SCREEN};
    default:
      return state;
  }
}

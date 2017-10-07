/* This reducer holds the UI state */
import {
  SWITCH_TO_WAIT_SCREEN,
  SWITCH_TO_GAME_SCREEN,
  STORE_GAMES_LIST
} from "../actions";

const HOME_SCREEN = "HOME_SCREEN";
const WAIT_SCREEN = "WAIT_SCREEN";
const GAME_SCREEN = "GAME_SCREEN";

export const uiState = (state = { activeScreen: HOME_SCREEN }, action) => {
  switch (action.type) {
    case SWITCH_TO_WAIT_SCREEN:
      return { ...state, activeScreen: WAIT_SCREEN };
    case SWITCH_TO_GAME_SCREEN:
      return { ...state, activeScreen: GAME_SCREEN };
    case STORE_GAMES_LIST:
      return { ...state, gamesList: action.gamesList };
    default:
      return state;
  }
};

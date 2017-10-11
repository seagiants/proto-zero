import { combineReducers } from "redux";
import { mapState } from "./mapState";
import { playersState } from "./playersState";
import { uiState } from "./uiState";
import { gameState } from "./gameState";

const appState = combineReducers({
  uiState,
  mapState,
  playersState,
  gameState
});

export default appState;

import { combineReducers } from "redux";
import { mapState } from "./mapState";
import { playersState } from "./playersState";
import { uiState } from "./uiState";
import { gameState } from "./gameState";
import { powerState } from "./powerState";

const appState = combineReducers({
  uiState,
  mapState,
  playersState,
  gameState,
  powerState
});

export default appState;

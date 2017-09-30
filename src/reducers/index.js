import { combineReducers } from "redux";
import { mapState } from "./mapState";
import { playersState } from "./playersState";
import { uiState } from "./uiState";

const appState = combineReducers({
  uiState,
  mapState,
  playersState
});

export default appState;

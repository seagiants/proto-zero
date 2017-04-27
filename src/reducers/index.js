import { combineReducers } from "redux";
import { mapState } from "./mapState";
import { playersState } from "./playersState";

const appState = combineReducers({
  mapState,
  playersState
});

export default appState;

import { combineReducers } from "redux";
import { mapState } from "./mapState";
import { playersState } from "./playersState";
import { uiState } from "./uiState";
import { gameState } from "./gameState";
import { powerState } from "./powerState";
import { deckState } from "./deckState";

const appState = combineReducers({
  uiState,
  mapState,
  playersState,
  gameState,
  powerState,
  deckState
});

export default appState;

import { GAME_CREATED, CHANGE_PLAYER_TURN } from "../actions";
import { STORE_WEBSOCKET } from "../actions/serverThunks";

const switchTurn = player =>
  player === "playerOne" ? "playerTwo" : "playerOne";

export const gameState = (state = {}, action) => {
  switch (action.type) {
    case GAME_CREATED:
      return { ...state, gameId: action.game.id, turn: action.game.turn };
    case STORE_WEBSOCKET:
      return { ...state, socket: action.socket };
    case CHANGE_PLAYER_TURN:
      const currentPlayerTurn = state.turn;
      return { ...state, turn: switchTurn(currentPlayerTurn) };
    default:
      return state;
  }
};

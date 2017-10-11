import { GAME_CREATED } from "../actions";
import {STORE_WEBSOCKET} from "../actions/serverThunks";

export const gameState = (state = {}, action) => {
  switch (action.type) {
    case GAME_CREATED:
      return { ...state, gameId: action.game.id };
    case STORE_WEBSOCKET:
      return {...state, socket: action.socket};
    default:
      return state;
  }
};

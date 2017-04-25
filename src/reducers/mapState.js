import { GENERATE_MAP } from "../actions";
import { generateMap } from "../engine";

const initialState = {
  gameMap: generateMap(20, 20)
};

export const mapState = (state = initialState, action) => {
  switch (action.type) {
    case GENERATE_MAP:
      return { ...state, gameMap: generateMap(action.x, action.y) };
    default:
      return state;
  }
};

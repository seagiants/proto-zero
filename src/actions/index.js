/* Action types */
export const START_GAME = "START_GAME";
export const GENERATE_MAP = "GENERATE_MAP";
export const DISCOVER_TILE = "DISCOVER_TILE";

/* Action creators */
export function startGame() {
  return {
    type: START_GAME
  };
}

export function generateMap(x, y) {
  return {
    type: GENERATE_MAP,
    x: x,
    y: y
  };
}

export function discoverTile() {
  return {
    type: DISCOVER_TILE
  };
}

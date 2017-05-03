/* Action types */
export const START_GAME = "START_GAME";
export const GENERATE_MAP = "GENERATE_MAP";
export const DISCOVER_TILE = "DISCOVER_TILE";
export const SELECTED_CARD = "SELECTED_CARD";

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

export function selectedCard(cardType) {
  return {
    type: SELECTED_CARD,
    cardType: cardType
  };
}

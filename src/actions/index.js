/* Action types */
export const START_GAME = "START_GAME";
export const GENERATE_MAP = "GENERATE_MAP";
export const DISCOVER_CELL = "DISCOVER_CELL";
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

export function discoverCell(x,y) {
  return {
    type: DISCOVER_CELL, x: x, y: y
  };
}

export function selectedCard(cardType, index) {
  return {
    type: SELECTED_CARD,
    cardType: cardType,
    cardIndex: index
  };
}

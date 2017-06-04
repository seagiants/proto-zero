/* Action types */
export const START_GAME = "START_GAME";
export const GENERATE_MAP = "GENERATE_MAP";
export const DISCOVER_CELL = "DISCOVER_CELL";
export const SELECTED_CARD = "SELECTED_CARD";
export const POWER_SELECTION = "POWER_SELECTION";
export const CLICK_CELL = "CLICK_CELL";
export const DRAW = "DRAW";
export const NO_ACTION = "NO_ACTION";
export const RESEARCH = "RESEARCH";
export const EXPLORE = "EXPLORE";
export const PRODUCE = "PRODUCE";

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
  return{
    type: DISCOVER_CELL,
    x: x,
    y: y
  };
}

export function clickCell(x,y) {
  return{
    type: CLICK_CELL,
    x: x,
    y: y
  };
}

export function draw(player) {
  return{
    type: DRAW,
    player: player
  };
};

export function selectedCard(player, card, index) {
  return {
    type: SELECTED_CARD,
    player: player,
    card: card,
    cardIndex: index
  };
};
  export function powerSelection(player, power) {
    return {
      type: POWER_SELECTION,
      player: player,
      power: power
    };
  };

  export function noAction(player){
    return {
      type: NO_ACTION,
      player: player
    };
  };

  export function explore(player){
    return {
      type: NO_ACTION,
      player: player
  };
};

  export function produce(player){
    return {
      type: NO_ACTION,
      player: player
  };
};

  export function research(player){
    return {
      type: NO_ACTION,
      player: player
  };
};

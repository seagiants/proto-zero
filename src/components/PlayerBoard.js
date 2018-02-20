import React from "react";
import PowerBoard from "./PowerBoard.js";
import DrawBoard from "./DrawBoard.js";
import ResourceCounter from "./ResourceCounter.js";
import uniqueId from "lodash.uniqueid";
import { connect } from "react-redux";

const styles = {
  alignSelf: "center",
  flexDirection: "column"
};

const PlayerBoard = ({ player, name, board, deck }) => (
  <div style={styles}>
    <div>
      <PowerBoard
        key={uniqueId(board.powerBoard)}
        player={player}
        name="PowerBoard"
        powers={board.powerBoard}
      />
      <DrawBoard
        key={uniqueId(board.deckState)}
        player={player}
        name="DrawBoard"
        cards={deck.toPick}
      />
      <ResourceCounter player={player} />
    </div>
  </div>
);

const mapStateToProps = (state, ownProps) => {
  const player = ownProps.player;
  return {
    //board: state.playersState[player].playerBoard
    board: state.powerState.board,
    deck: state.playersState[player].playerBoard.deckState
  };
};

export default connect(mapStateToProps)(PlayerBoard);

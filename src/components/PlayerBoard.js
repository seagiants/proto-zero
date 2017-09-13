import React from "react";
import PowerBoard from "./PowerBoard.js";
import DrawBoard from "./DrawBoard.js";
import EndTurnButton from "./EndTurnButton.js";
import ResourceCounter from "./ResourceCounter.js";
import uniqueId from "lodash.uniqueid";
import { connect } from "react-redux";

const styles = {
  alignSelf: "center"
};

const PlayerBoard = ({ player, name, board }) => (
  <div style={styles}>
    <div>{name}</div>
    <div>
      <PowerBoard
        key={uniqueId(board.powerBoard)}
        player={player}
        name="PowerBoard"
        powers={board.powerBoard}
      />
      <DrawBoard
        key={uniqueId(board.drawBoard)}
        player={player}
        name="DrawBoard"
        cards={board.drawBoard}
      />
      <EndTurnButton player={player} />
      <ResourceCounter player={player} />
    </div>
  </div>
);

const mapStateToProps = (state, ownProps) => {
  const player = ownProps.player;
  return {
    name: state.playersState[player].name,
    board: state.playersState[player].playerBoard
  };
};

export default connect(mapStateToProps)(PlayerBoard);

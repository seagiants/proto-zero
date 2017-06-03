import React from "react";
import ActionBoard from "./ActionBoard.js";
import DrawBoard from "./DrawBoard.js";
import uniqueId from "lodash.uniqueid";
import { connect } from "react-redux";

const styles = {
  alignSelf: "center"
};

const PlayerBoard = ({ player, name, board }) => (
  <div style={styles}>
    <div>{name}</div>
    <div>
      {
        <ActionBoard
          key={uniqueId(board.actionBoard)}
          player={player}
          name='ActionBoard'
          board={board.actionBoard}

        />},{
        <DrawBoard
          key={uniqueId(board.drawBoard)}
          board={board.drawBoard}
          player={player}
        />
      }
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

import React from "react";
import PlayerAction from "./PlayerAction";
import uniqueId from "lodash.uniqueid";
import { connect } from "react-redux";

const styles = {
  alignSelf: "center"
};

const ActionBoard = ({ player, name, actions }) => (
  <div style={styles}>
    <div>{name}</div>
    <div>
      {actions.map((playerAction, index) => (
        <PlayerAction
          key={uniqueId(playerAction.name)}
          action={playerAction}
          index={index}
          player={player}
        />
      ))}
    </div>
  </div>
);

const mapStateToProps = (state, ownProps) => {
  const player = ownProps.player;
  return {
    name: state.playersState[player].name,
    actions: state.playersState[player].actionBoard
  };
};

export default connect(mapStateToProps)(ActionBoard);

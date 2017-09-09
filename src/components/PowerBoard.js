import React from "react";
import PowerCase from "./PowerCase";
import uniqueId from "lodash.uniqueid";
import { connect } from "react-redux";

const styles = {
  alignSelf: "center"
};

const PowerBoard = ({ player, name, powers }) => (
  <div style={styles}>
    <div>
      {powers.map((power, index) => (
        <PowerCase
          key={uniqueId(power.name)}
          power={power}
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
    powers: state.playersState[player].playerBoard.powerBoard
  };
};

export default connect(mapStateToProps)(PowerBoard);

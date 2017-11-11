import React from "react";
import PowerCase from "./PowerCase";
import uniqueId from "lodash.uniqueid";
import { connect } from "react-redux";

const styles = {
  alignSelf: "center",
  flexDirection: "column"
};

const PowerBoard = ({ player, name, powerCases }) => (
  <div style={styles}>
      {powerCases.map((powerCase, index) => (
        <PowerCase
          key={uniqueId(powerCase.name)}
          powerCase={powerCase}
          player={player}
        />
      ))}
  </div>
);

const mapStateToProps = (state, ownProps) => {
  const player = ownProps.player;
  return {
    name: state.playersState[player].name,
    powerCases: state.playersState[player].playerBoard.powerBoard
  };
};

export default connect(mapStateToProps)(PowerBoard);

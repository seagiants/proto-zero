import React from "react";
import PowerCase from "./PowerCase";
import uniqueId from "lodash.uniqueid";
import { connect } from "react-redux";
import { getActivePower } from "../engine/powerLogic";

const styles = {
  alignSelf: "center",
  flexDirection: "column"
};

const PowerBoard = ({ player, name, powerCases }) => (
  <div style={styles}>
    {powerCases.map(powerCase => {
      return (
        <PowerCase
          key={uniqueId(powerCase.name)}
          powerCase={powerCase}
          activePower={getActivePower(powerCase)}
          player={player}
        />
      );
    })}
  </div>
);

const mapStateToProps = (state, ownProps) => {
  const player = ownProps.player;
  return {
    name: state.playersState[player].name,
    powerCases: state.powerState.board
  };
};

export default connect(mapStateToProps)(PowerBoard);

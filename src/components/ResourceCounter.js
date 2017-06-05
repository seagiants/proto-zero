import React from "react";
import { connect } from "react-redux";


const w = 60;
const h = 30;

const ResourceCounter = ({player, counter }) => {
  return (
    <div>Resource : {counter}</div>
  );
};

const mapStateToProps = (state,ownProps) => {
  const player = ownProps.player;
  return {
    counter: state.playersState[player].playerBoard.resourceCounter
  };
};

export default connect(mapStateToProps)(ResourceCounter);

import React from "react";
import uniqueId from "lodash.uniqueid";
import flatten from "lodash.flatten";
import { connect } from "react-redux";
import Cell from "./Cell";

const styles = {
  alignSelf: "center"
};

//FIXME the width and height attributes should be calculated
// 600 is 20 tiles times 30 of dimension
// those should be constants
const MapDisplay = ({ gameMap }) => (
  <div style={styles}>
    <svg width={600} height={600}>
      {flatten(gameMap).map(type => <Cell key={uniqueId()} type={type} />)}
    </svg>
  </div>
);

const mapStateToProps = state => {
  return { gameMap: state.mapState.gameMap };
};

export default connect(mapStateToProps)(MapDisplay);

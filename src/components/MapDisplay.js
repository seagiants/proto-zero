import React from "react";
import uniqueId from "lodash.uniqueid";
import flatten from "lodash.flatten";
import { connect } from "react-redux";
import Cell from "./Cell";
import { mapDimensions, cellSize } from "../constants";

const styles = {
  alignSelf: "center"
};

// FIXME the width and height of the SVG should come not from the obsolete constants
// FIXME but from the gameMap object itself
const MapDisplay = ({ gameMap }) => (
  <div style={styles}>
    <svg
      width={gameMap[0].length * cellSize.width}
      height={gameMap.length * cellSize.height}
    >
      {flatten(gameMap).map(type => <Cell key={uniqueId()} type={type} />)}
    </svg>
  </div>
);

const mapStateToProps = state => {
  return { gameMap: state.mapState.gameMap };
};

export default connect(mapStateToProps)(MapDisplay);

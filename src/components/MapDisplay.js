import React from "react";
import uniqueId from "lodash.uniqueid";
import flatten from "lodash.flatten";
import { connect } from "react-redux";
import Cell from "./Cell";
import { mapDimensions, cellSize } from "../constants";

const styles = {
  alignSelf: "center"
};

//FIXME the width and height attributes should be calculated
// 600 is 20 tiles times 30 of dimension
// those should be constants
const MapDisplay = ({ gameMap }) => (
  <div style={styles}>
    <svg width={mapDimensions.width * cellSize.width} height={mapDimensions.height * cellSize.height}>
      {flatten(gameMap).map(type => <Cell key={uniqueId()} type={type} />)}
    </svg>
  </div>
);

const mapStateToProps = state => {
  return { gameMap: state.mapState.gameMap };
};

export default connect(mapStateToProps)(MapDisplay);

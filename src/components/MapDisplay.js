import React from "react";
import uniqueId from "lodash.uniqueid";
import { connect } from "react-redux";
import Cell from "./Cell";
import { cellSize } from "../constants";

const styles = {
  alignSelf: "center"
};

const MapDisplay = ({ gameMap, mapWidth, mapHeight }) => (
  <div style={styles}>
    <svg width={mapWidth * cellSize.width} height={mapHeight * cellSize.height}>
      {gameMap.map(type => <Cell key={uniqueId()} type={type} />)}
    </svg>
  </div>
);

const mapStateToProps = state => {
  return {
    gameMap: state.mapState.gameMap,
    mapWidth: state.mapState.mapWidth,
    mapHeight: state.mapState.mapHeight
  };
};

export default connect(mapStateToProps)(MapDisplay);

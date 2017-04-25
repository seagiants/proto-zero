import React from "react";
import uniqueId from "lodash.uniqueid";
import { connect } from "react-redux";
import Row from "./Row";

const MapDisplay = ({ gameMap }) => (
  <div>
    {gameMap.map(row => <Row key={uniqueId()} row={row} />)}
  </div>
);

const mapStateToProps = state => {
  return { gameMap: state.mapState.gameMap };
};

export default connect(mapStateToProps)(MapDisplay);

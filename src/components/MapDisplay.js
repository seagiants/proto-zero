import React from "react";
import uniqueId from "lodash.uniqueid";
import { connect } from "react-redux";
import Row from "./Row";

const styles = {
  alignSelf: "center"
};

const MapDisplay = ({ gameMap }) => (
  <div style={styles}>
    {gameMap.map(row => <Row key={uniqueId()} row={row} />)}
  </div>
);

const mapStateToProps = state => {
  return { gameMap: state.mapState.gameMap };
};

export default connect(mapStateToProps)(MapDisplay);

import React from "react";
import uniqueId from "lodash.uniqueid";
import Row from "./Row";

const MapDisplay = ({ gameMap }) => (
  <div>
    {gameMap.map(row => <Row key={uniqueId()} row={row} />)}
  </div>
);

export default MapDisplay;

import React from "react";
import uniqueId from "lodash.uniqueid";
import Row from "./Row";

const MapDisplay = ({ gameMap }) => (
  <div>
    {gameMap.map((e, i) => <Row key={uniqueId()} row={e} />)}
  </div>
);

export default MapDisplay;

import React from "react";
import range from "lodash.range";
import uniqueId from 'lodash.uniqueid';
import Row from "./Row";

const Grid = ({ x, y }) => (
  <div>
    {range(x).map((e, i) => <Row key={uniqueId()} size={y} />)}
  </div>
);

export default Grid;

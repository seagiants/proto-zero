import React from "react";
import range from "lodash.range";
import Row from "./Row";

const Grid = ({ x, y }) => (
  <div>
    {range(x).map((e, i) => <Row size={y} />)}
  </div>
);

export default Grid;

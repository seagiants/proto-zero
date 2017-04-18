import React from "react";
import Cell from "./Cell";
import range from "lodash.range";

const Row = ({ size }) => (
  <div>
    {range(size).map(() => <Cell />)}
  </div>
);

export default Row;

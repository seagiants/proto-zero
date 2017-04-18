import React from "react";
import Cell from "./Cell";
import range from "lodash.range";
import uniqueId from 'lodash.uniqueid';

const Row = ({ size }) => (
  <div>
    {range(size).map(() => <Cell key={uniqueId()}/>)}
  </div>
);

export default Row;

import React from "react";
import Cell from "./Cell";
import range from "lodash.range";
import uniqueId from "lodash.uniqueid";
import random from "lodash.random";

const types = ["field", "river", "mountain", "forest"];

const randType = types => types[random(types.length)];

const Row = ({ size }) => (
  <div>
    {range(size).map(() => <Cell key={uniqueId()} type={randType(types)} />)}
  </div>
);

export default Row;

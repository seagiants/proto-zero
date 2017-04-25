import React from 'react';

const w = 30;
const h = 30;

const Cell = ({ type }) => {
  return (
    <svg
      width={w}
      height={h}
      onClick={() => {
        console.log(`clicking on a ${type.name} tile`);
      }}
    >
      <rect width={w} height={h} style={{ fill: type.color }} />
    </svg>
  );
};

export default Cell;

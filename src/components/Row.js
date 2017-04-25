import React from 'react';
import Cell from './Cell';
import uniqueId from 'lodash.uniqueid';

const Row = ({ row }) => (
  <div>
    {row.map(type => <Cell key={uniqueId()} type={type} />)}
  </div>
);

export default Row;

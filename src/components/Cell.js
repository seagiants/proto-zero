import React from "react";
import { connect } from "react-redux";
import { discoverCell } from "../actions";

const w = 30;
const h = 30;

const Cell = ({ type, click }) => {
  return (
    <svg
      width={w}
      height={h}
      onClick={e => {
        e.preventDefault();
        console.log(`clicking on a ${type.name} tile with position [${type.x} - ${type.y}]`);
        click(type.x,type.y);
      }}
    >
      <rect width={w} height={h} style={{ fill: type.hidden ? 'black' : type.color }} />
    </svg>
  );
};

const mapStateToProps = state => state;

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    click: (x,y) => {
      dispatch(discoverCell(x,y));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cell);

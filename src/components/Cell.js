import React from "react";
import { connect } from "react-redux";
import { discoverTile } from "../actions";

const w = 30;
const h = 30;

const Cell = ({ type, click }) => {
  return (
    <svg
      width={w}
      height={h}
      onClick={e => {
        e.preventDefault();
        console.log(`clicking on a ${type.name} tile`);
        click();
      }}
    >
      <rect width={w} height={h} style={{ fill: type.color }} />
    </svg>
  );
};

const mapStateToProps = state => state;

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    click: () => {
      dispatch(discoverTile());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cell);

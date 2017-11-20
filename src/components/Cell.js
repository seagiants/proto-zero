import React from "react";
import { connect } from "react-redux";
import { clickOnCell } from "../actions/actionFlowThunks.js";
import { cellSize } from "../constants";
import { cellBack, cellShield } from "../svg";

const getCellContent = (type, w, h) => {
  if (type.content !== null && type.content !== undefined) {
    const xSymb = type.x * w + w * 0.3;
    const ySymb = type.y * h + h * 0.8;
    const xSh = type.x * w + w / 2;
    const ySh = type.y * h + h / 2;
    const shield =
      type.content.buildingProps !== null &&
      type.content.buildingProps !== undefined &&
      type.content.buildingProps.shield > 0
        ? cellShield(xSh, ySh, type.content.buildingProps.shield)
        : null;
    return (
      <g>
        {shield}
        <text fontSize="20" x={xSymb} y={ySymb}>
          {type.content.symbol}
        </text>
      </g>
    );
  } else {
    return null;
  }
};

const renderCell = (type, click, selectedPower) => {
  //First render Cell+content instead of Cell or Content.
  const h = cellSize.height;
  const w = cellSize.width;
  return (
    <g>
      {cellBack(type, w, h)}
      {getCellContent(type, w, h)}
      {
        //Clicking transparent zone
      }
      <rect
        onClick={e => {
          e.preventDefault();
          click(type.x, type.y, selectedPower);
        }}
        width={w}
        height={h}
        x={type.x * w}
        y={type.y * h}
        stroke="#fff"
        fill="#fff"
        fillOpacity="0"
        strokeOpacity="0"
      />
    </g>
  );
};

const Cell = ({ type, click, selectedPower }) => {
  return renderCell(type, click, selectedPower);
};

const mapStateToProps = state => {
  if (
    state.mapState.selectedPower !== null &&
    state.mapState.selectedPower !== undefined
  ) {
    return { selectedPower: state.mapState.selectedPower };
  } else {
    return {};
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    click: (x, y, selectedPower) => {
      console.log("clicking on cell", x, y);
      dispatch(clickOnCell(x, y, selectedPower, ownProps.player));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cell);

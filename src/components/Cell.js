import React from "react";
import { connect } from "react-redux";
import { clickOnCell } from "../actions/actionFlowThunks.js";
import { cellSize } from "../constants";
import { cellBack } from "../svg";


const getCellContent = (type,w,h) => {
    if(type.content !== null && type.content !== undefined){
      return <text
        fontSize="20"
        x={(type.x)*w+w*0.3}
        y={(type.y)*h+h*0.8}>
          {type.content.symbol}
      </text>
    } else {
      return null
    }
};

const renderCell = (type, click, selectedPower) => {
  //First render Cell+content instead of Cell or Content.
  /*if (type.visibleBuilding !== null && type.visibleBuilding !== undefined) {
    return type.visibleBuilding.renderBuilding();
  } else {
    */
    const h = cellSize.height;
    const w = cellSize.width;
    return (
      <g>
      {cellBack(type,w,h)}
      {getCellContent(type,w,h)}
      {
        //Clicking transparent zone
      }
      <rect
        onClick={e => {
          e.preventDefault();
          console.log(
            `clicking on a ${type.name} tile with position [${type.x} - ${type.y}]`
          );
          click(type.x, type.y, selectedPower);
        }} width={w}
        height={h}
        x={type.x * w}
        y={type.y * h}
        stroke="#fff" fill="#fff" fillOpacity="0" strokeOpacity="0"/>
      </g>
    );
  };

const Cell = ({ type, click, selectedPower }) => {
  return renderCell(type, click, selectedPower);
};

const mapStateToProps = state => {
  if (state.mapState.selectedPower !== null && state.mapState.selectedPower !== undefined ) {
    return { selectedPower: state.mapState.selectedPower };
    } else {
    return {};
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    click: (x, y, selectedPower) => {
      dispatch(clickOnCell(x, y,selectedPower,ownProps.player));
    }
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(Cell);

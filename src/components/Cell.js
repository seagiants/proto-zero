import React from "react";
import { connect } from "react-redux";
import { clickOnCell, noAction } from "../actions";

const w = 30;
const h = 30;

const styles = type => ({
  fill: type.hidden ? "black" : type.color
});

const renderCell = (type, click, selectedPower) => {
  if (type.visibleBuilding !== null && type.visibleBuilding !== undefined) {
    return type.visibleBuilding.renderBuilding();
  } else {
    return (
      <rect
        width={w}
        height={h}
        x={type.x * 30}
        y={type.y * 30}
        style={styles(type)}
        onClick={e => {
          e.preventDefault();
          console.log(
            `clicking on a ${type.name} tile with position [${type.x} - ${type.y}]`
          );
          click(type.x, type.y, selectedPower);
        }}
      />
    );
  }
};

const Cell = ({ type, click, selectedPower }) => {
  return renderCell(type, click, selectedPower);
};

const mapStateToProps = state => {
  if (state.mapState.selectedPower !== null) {
    return { selectedPower: state.mapState.selectedPower };
  } else {
    return { selectedPower: noAction };
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    click: (x, y, selectedPower) => {
      console.log(x);
      console.log(y);
      console.log(selectedPower);
      dispatch(clickOnCell(x, y,selectedPower));
    }
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(Cell);

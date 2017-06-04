import React from "react";
import { connect } from "react-redux";
import { noAction } from "../actions"

const w = 30;
const h = 30;

const styles = type => ({
  fill: type.hidden ? "black" : type.color
});

const Cell = ({ type, click, selectedPower }) => {
  return (
    <svg
      width={w}
      height={h}
      onClick={e => {
        e.preventDefault();
        console.log(
          `clicking on a ${type.name} tile with position [${type.x} - ${type.y}]`
        );
        click(type.x, type.y, selectedPower.powerAction);
      }}
    >
      <rect width={w} height={h} style={styles(type)} />
    </svg>
  );
};

const mapStateToProps = state => {
  if(state.mapState.selectedPower !== null) {
    return { selectedPower: state.mapState.selectedPower };
  } else {
    return { selectedPower: noAction };
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return {
    click: (x, y, action) => {
      if(action !== null && action !== undefined){
        dispatch(action(x, y));
      }
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cell);

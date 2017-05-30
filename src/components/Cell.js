import React from "react";
import { connect } from "react-redux";


const w = 30;
const h = 30;

const styles = type => ({
  fill: type.hidden ? "black" : type.color
});

const Cell = ({ type, click, selectedCard }) => {
  return (
    <svg
      width={w}
      height={h}
      onClick={e => {
        e.preventDefault();
        console.log(
          `clicking on a ${type.name} tile with position [${type.x} - ${type.y}]`
        );
        click(type.x, type.y, selectedCard.action);
      }}
    >
      <rect width={w} height={h} style={styles(type)} />
    </svg>
  );
};

const mapStateToProps = state => {
  if(state.mapState.selectedCard !== null) {
    return { selectedCard: state.mapState.selectedCard };
  } else {
    return { selectedCard: null };
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    click: (x, y, action) => {
      dispatch(action(x, y));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cell);

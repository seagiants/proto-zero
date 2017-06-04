import React from "react";
import { connect } from "react-redux";
import { draw} from "../actions"


const w = 60;
const h = 30;

const DrawButton = ({ player, click }) => {
  return (
    <svg
      width={w}
      height={h}
      onClick={e => {
        e.preventDefault();
        console.log(
          `clicking on DrawButton`
        );
        click(player);
      }}
    >
      <rect width={w} height={h}/>
    </svg>
  );
};

const mapStateToProps = state => state

const mapDispatchToProps = (dispatch, ownProps) => {
  const player = ownProps.player
  return {
    click: () => {
      dispatch(draw(player));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DrawButton);

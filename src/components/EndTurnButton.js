import React from "react";
import { connect } from "react-redux";
import { clickOnEndTurn } from "../actions"


const w = 60;
const h = 30;

const EndTurnButton = ({ player, click }) => {
  return (
    <svg
      width={w}
      height={h}
      onClick={e => {
        e.preventDefault();
        console.log(
          `clicking on EndTurnButton`
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
  return {
    click: (player) => {
      dispatch(clickOnEndTurn(player))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EndTurnButton);

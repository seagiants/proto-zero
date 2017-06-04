import React from "react";
import { connect } from "react-redux";
import { powerSelection } from "../actions";
import { powerIndex } from "../engine";

const h = 60;
const w = 40;

const Power = ({ power, index, player, card, click }) => {
  const powerText = card == null ? power.type : card.name;
  return (
    <svg width={2*w} height={3*h} >
    <text x="0"
       y="20"
       id="text4533">{powerText}</text>
    <rect x="20" y="30" width={w} height={h} style={{fill: power.color}} onClick={e => {
      e.preventDefault();
      console.log(`clicking on a ${power.type} power tile`);
      click(player,power,index);
    }} />

    </svg>
);
};

const mapStateToProps = (state, ownProps) => {
    const player = ownProps.player;
    const index = powerIndex(ownProps.power.type);
  return {
    card: state.playersState[player].playerBoard.powerBoard[index].card
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    click: (player, power, cardIndex) => {
      dispatch(powerSelection(player, power));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Power);

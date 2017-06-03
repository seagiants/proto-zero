import React from "react";
import { connect } from "react-redux";
import { selectedCard } from "../actions";

const PlayerAction = ({ action, index, player, click }) => {
  return (
    <svg width={3*action.w} height={2*action.w} >
    <text x="0"
       y="20"
       id="text4533">{action.type}</text>
    <rect x="20" y="30" width={action.w} height={action.h} style={{fill: action.color}} onClick={e => {
      e.preventDefault();
      console.log(`clicking on a ${action.type} card`);
      click(player,action,index);
    }} />

    </svg>
);
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    click: (player, action, cardIndex) => {
      dispatch(selectedCard(player, action.type, cardIndex));
    }
  };
};

export default connect(state => state, mapDispatchToProps)(PlayerAction);

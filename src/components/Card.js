import React from "react";
import { connect } from "react-redux";
import { selectedCard } from "../actions";

const Card = ({ card, index, player, click }) => {
  return (
    <svg width={3*card.w} height={2*card.w} >
    <text x="0"
       y="20"
       id="text4533">{card.name} / {card.cost}</text>
    <rect x="20" y="30" width={card.w} height={card.h} style={{fill: card.color}} onClick={e => {
      e.preventDefault();
      console.log(`clicking on a ${card.name} card`);
      click(player,card.name,index);
    }} />

    </svg>
);
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    click: (player, cardType, cardIndex) => {
      dispatch(selectedCard(player, cardType, cardIndex));
    }
  };
};

export default connect(state => state, mapDispatchToProps)(Card);

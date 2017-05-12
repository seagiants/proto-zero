import React from "react";
import { connect } from "react-redux";
import { selectedCard } from "../actions";

const Card = ({ card, index, player, click }) => (
  <span
    onClick={() => {
      click(player, card.name, index);
    }}
  >
    {card.name} - {card.cost}
  </span>
);

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    click: (player, cardType, cardIndex) => {
      dispatch(selectedCard(player, cardType, cardIndex));
    }
  };
};

export default connect(state => state, mapDispatchToProps)(Card);

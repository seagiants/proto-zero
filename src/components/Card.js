import React from "react";
import { connect } from "react-redux";
import { selectedCard } from "../actions";

const Card = ({ card, index, click }) => (
  <span
    onClick={() => {
      click(card.name, index);
    }}
  >
    {card.name} - {card.cost}
  </span>
);

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    click: (cardType, cardIndex) => {
      dispatch(selectedCard(cardType, cardIndex));
    }
  };
};

export default connect(state => state, mapDispatchToProps)(Card);

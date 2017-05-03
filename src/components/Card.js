import React from "react";
import { connect } from "react-redux";
import { selectedCard } from "../actions";

const Card = ({ card, click }) => (
  <span
    onClick={() => {
      click(card.name);
    }}
  >
    {card.name} - {card.cost}
  </span>
);

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    click: cardType => {
      dispatch(selectedCard(cardType));
    }
  };
};

export default connect(state => state, mapDispatchToProps)(Card);

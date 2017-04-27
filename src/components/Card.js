import React from "react";
import { connect } from "react-redux";
import { seletedCard } from "../actions";

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
      dispatch(seletedCard(cardType));
    }
  };
};

export default connect(state => state, mapDispatchToProps)(Card);

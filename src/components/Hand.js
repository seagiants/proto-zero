import React from "react";
import Card from "./Card";
import uniqueId from "lodash.uniqueid";
import { connect } from "react-redux";

const Hand = ({ cards }) => (
  <div>
    {cards.map(card => <Card key={uniqueId(card.name)} card={card} />)}
  </div>
);

const mapStateToProps = (state) => {
  return {
    cards: state.playersState.playerOne.hand
  };
}

export default connect(mapStateToProps)(Hand);

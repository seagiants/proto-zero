import React from "react";
import Card from "./Card";
import uniqueId from "lodash.uniqueid";
import { connect } from "react-redux";

const Hand = ({ player, name, cards }) => (
  <div>
    <div>{name}</div>
    <div>
      {cards.map(card => <Card key={uniqueId(card.name)} card={card} />)}
    </div>
  </div>
);

const mapStateToProps = (state, ownProps) => {
  const player = ownProps.player;
  return {
    name: state.playersState[player].name,
    cards: state.playersState[player].hand
  };
};

export default connect(mapStateToProps)(Hand);

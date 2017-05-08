import React from "react";
import Card from "./Card";
import uniqueId from "lodash.uniqueid";
import { connect } from "react-redux";

const styles = {
  alignSelf: "center"
};

const Hand = ({ player, name, cards }) => (
  <div style={styles}>
    <div>{name}</div>
    <div>
      {cards.map((card, index) => (
        <Card key={uniqueId(card.name)} card={card} index={index} />
      ))}
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

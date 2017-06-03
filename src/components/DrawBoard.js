import React from "react";
import Card from "./Card";
import uniqueId from "lodash.uniqueid";
import { connect } from "react-redux";

const styles = {
  alignSelf: "center"
};

const DrawBoard = ({ player, name, cards }) => (
  <div style={styles}>
    <div>
      {cards.map((card, index) => (
        <Card
          key={uniqueId(card.name)}
          card={card}
          index={index}
          player={player}
        />
      ))}
    </div>
  </div>
);

const mapStateToProps = (state, ownProps) => {
  const player = ownProps.player;
  return {
    name: state.playersState[player].name,
    cards: state.playersState[player].drawBoard
  };
};

export default connect(mapStateToProps)(DrawBoard);

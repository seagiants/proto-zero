import React from "react";
import Card from "./Card";
import uniqueId from "lodash.uniqueid";
import { connect } from "react-redux";

const w = "10";
const h = "60";
const styles = {
  alignSelf: "center"
};

function refillDrawBoard(cards,player){
  if(cards == null){
    return(<svg width={2*w} height={3*h} />);
  }else{
    return(cards.map((card, index) => (
      <Card
        key={uniqueId(card.name)}
        card={card}
        index={index}
        player={player}
        />
      )))};
};
const DrawBoard = ({ player, name, cards }) => {
 return(
  <div style={styles}>
    <div>
        {refillDrawBoard(cards,player)}
    </div>
  </div>
);
};
const mapStateToProps = (state, ownProps) => {
  const player = ownProps.player;
  return {
    name: state.playersState[player].name,
    cards: state.playersState[player].playerBoard.drawBoard
  };
};

export default connect(mapStateToProps)(DrawBoard);

import React from "react";

const textDisplay = (whoseTurn, player) =>
  whoseTurn === player ? "Your" : "Opponent's";

const WhoseTurnIsIt = props => <p>{ textDisplay(props.whose, props.player) } turn</p>;

export default WhoseTurnIsIt;

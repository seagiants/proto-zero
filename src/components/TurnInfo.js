import React from "react";
import EndTurnButton from "./EndTurnButton";
import WhoseTurnIsIt from "./WhoseTurnIsIt";

const styles = {
  alignSelf: "center"
};

const TurnInfo = (props) => {
  const player = props.player;
  return(
    <div style={styles}>
      <WhoseTurnIsIt who="your" />
      <EndTurnButton player={player} />
    </div>
  )
};

export default TurnInfo;

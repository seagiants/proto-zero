import React from "react";
import { connect } from "react-redux";
import EndTurnButton from "./EndTurnButton";
import WhoseTurnIsIt from "./WhoseTurnIsIt";

const styles = {
  alignSelf: "center"
};

const TurnInfo = ({player, turn}) => {
  return(
    <div style={styles}>
      <WhoseTurnIsIt who={turn} />
      <EndTurnButton player={player} />
    </div>
  )
};

const mapStateToProps = state => {
  return {
    turn: state.gameState.turn
  }
}

export default connect(mapStateToProps)(TurnInfo);

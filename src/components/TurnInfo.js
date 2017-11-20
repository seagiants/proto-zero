import React from "react";
import { connect } from "react-redux";
import EndTurnButton from "./EndTurnButton";
import WhoseTurnIsIt from "./WhoseTurnIsIt";

const styles = {
  alignSelf: "center"
};

const TurnInfo = ({player, turn, currentPlayerNum}) => {
  return(
    <div style={styles}>
      <WhoseTurnIsIt whose={turn} player={currentPlayerNum}/>
      <EndTurnButton player={player} />
    </div>
  )
};

const mapStateToProps = state => {
  return {
    turn: state.gameState.turn,
    currentPlayerNum: state.playersState.playerNum
  }
}

export default connect(mapStateToProps)(TurnInfo);

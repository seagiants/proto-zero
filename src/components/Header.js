import React from "react";
import { connect } from "react-redux";

const Header = ({ name }) => <div>P R O T O Z E R O { name === null ? "" : (`-- ${name}`)}</div>;

const mapStateToProps = (state, ownProps) => {
  const playersState = state.playersState;
  const pNum = playersState.playerNum;
  if (pNum !== undefined) {
    return { name: playersState[pNum].name };
  } else {
    return { name: null }
  }
};

export default connect(mapStateToProps)(Header);

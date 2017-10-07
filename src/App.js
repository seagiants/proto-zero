import React from "react";
import { connect } from "react-redux";
import HomeScreen from "./components/HomeScreen";
import WaitScreen from "./components/WaitScreen";
import GameScreen from "./components/GameScreen";

const getActiveScreenComponent = activeScreen => {
  switch (activeScreen) {
    case "HOME_SCREEN":
      return <HomeScreen />;
    case "WAIT_SCREEN":
      return <WaitScreen />;
    case "GAME_SCREEN":
      return <GameScreen />;
    default:
      return <HomeScreen />;
  }
};

const App = ({ activeScreen }) => (
  <div>{getActiveScreenComponent(activeScreen)}</div>
);

const mapStateToProps = (state, ownProps) => {
  return { activeScreen: state.uiState.activeScreen };
};

export default connect(mapStateToProps)(App);

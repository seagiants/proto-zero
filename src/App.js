import React from "react";
import { connect } from "react-redux";
import PlayerBoard from "./components/PlayerBoard";
import MapDisplay from "./components/MapDisplay";
import Chat from "./components/Chat";
import HomeScreen from "./components/HomeScreen";

const styles = {
  display: "flex",
  flexDirection: "column"
};

const SWITCH = true;

const App = ({ activeScreen }) => (
  <div>
    {activeScreen === "HOME_SCREEN" ? (
      <div style={styles}>
        <HomeScreen />
      </div>
    ) : (
      <div style={styles}>
        <PlayerBoard player="playerOne" />
        <MapDisplay />
        <PlayerBoard player="playerTwo" />
        <Chat />
      </div>
    )}
  </div>
);

const mapStateToProps = (state, ownProps) => {
  return { activeScreen: state.uiState.activeScreen };
};

export default connect(mapStateToProps)(App);

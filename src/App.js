import React from "react";
import PlayerBoard from "./components/PlayerBoard";
import MapDisplay from "./components/MapDisplay";
import Chat from "./components/Chat";
import HomeScreen from "./components/HomeScreen";

const styles = {
  display: "flex",
  flexDirection: "column"
};

const SWITCH = true;

const App = () => (
  <div>
    {SWITCH ? (
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

export default App;

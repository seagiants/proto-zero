import React from "react";
import PlayerBoard from "./components/PlayerBoard";
import MapDisplay from "./components/MapDisplay";
import Chat from "./components/Chat";

const styles = {
  display: "flex",
  flexDirection: "column"
};

const App = () => (
  <div style={styles}>
    <PlayerBoard player="playerOne"/>
    <MapDisplay />
    <PlayerBoard player="playerTwo"/>
    <Chat />
  </div>
);

export default App;

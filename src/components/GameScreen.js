import React from "react";
import PlayerBoard from "./PlayerBoard";
import MapDisplay from "./MapDisplay";

const styles = {
  display: "flex",
  flexDirection: "column"
};

const GameScreen = () => (
  <div style={styles}>
    <MapDisplay />
    <PlayerBoard player="playerOne" />
  </div>
);

export default GameScreen;

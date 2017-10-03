import React from "react";
import PlayerBoard from "./PlayerBoard";
import MapDisplay from "./MapDisplay";

const styles = {
  display: "flex",
  flexDirection: "column"
};

const GameScreen = () => (
  <div style={styles}>
    <PlayerBoard player="playerOne" />
    <MapDisplay />
    <PlayerBoard player="playerTwo" />
  </div>
);

export default GameScreen;

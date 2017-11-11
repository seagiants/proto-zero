import React from "react";
import PlayerBoard from "./PlayerBoard";
import MapDisplay from "./MapDisplay";
import TurnInfo from "./TurnInfo";

const styles = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around"
};

const GameScreen = () => (
  <div style={styles}>
    <TurnInfo player="playerOne"/>
    <MapDisplay />
    <PlayerBoard player="playerOne" />
  </div>
);

export default GameScreen;

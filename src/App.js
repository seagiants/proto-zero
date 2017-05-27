import React from "react";
import Hand from "./components/Hand";
import MapDisplay from "./components/MapDisplay";
import Chat from "./components/Chat";

const styles = {
  display: "flex",
  flexDirection: "column"
};

const App = () => (
  <div style={styles}>
    <Hand player="playerOne" />
    <MapDisplay />
    <Hand player="playerTwo" />
    <Chat />
  </div>
);

export default App;

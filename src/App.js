import React from "react";
import Hand from "./components/Hand";
import MapDisplay from "./components/MapDisplay";

const styles = {
  display: "flex",
  flexDirection: "column"
};

const App = () => (
  <div style={styles}>
    <Hand player="playerOne" />
    <MapDisplay />
    <Hand player="playerTwo" />
  </div>
);

export default App;

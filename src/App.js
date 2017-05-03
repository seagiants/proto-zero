import React from "react";
import Hand from "./components/Hand";
import MapDisplay from "./components/MapDisplay";

const styling = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center"
};

const App = () => (
  <div style={styling}>
    <Hand player="playerOne"/>
    <MapDisplay />
    <Hand player="playerTwo"/>
  </div>
);

export default App;

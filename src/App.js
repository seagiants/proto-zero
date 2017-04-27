import React from "react";
import "./App.css";
import Hand from "./components/Hand";
import MapDisplay from "./components/MapDisplay";

const App = () => (
  <div>
    <Hand player="playerOne"/>
    <MapDisplay />
    <Hand player="playerTwo"/>
  </div>
);

export default App;

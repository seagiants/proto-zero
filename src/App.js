import React from "react";
import "./App.css";
import Hand from "./components/Hand";
import MapDisplay from "./components/MapDisplay";

const playerOneCards = [
  {
    name: "Forge",
    cost: 3
  },
  {
    name: "Science",
    cost: 3
  }
];
const playerTwoCards = [
  {
    name: "Factory",
    cost: 4
  },
  {
    name: "Science",
    cost: 3
  }
];

const App = () => (
  <div>
    <Hand cards={playerOneCards} />
    <MapDisplay />
    <Hand cards={playerTwoCards} />
  </div>
);

export default App;

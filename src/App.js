import React from "react";
import "./App.css";
import Hand from "./components/Hand";
import MapDisplay from "./components/MapDisplay";
import { generateMap } from "./engine";

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
    <MapDisplay gameMap={generateMap(20,20)} />
    <Hand cards={playerTwoCards} />
  </div>
);

export default App;

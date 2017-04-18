import React from "react";
import "./App.css";
import Hand from "./components/Hand";
import Grid from "./components/Grid";

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
    <Grid x={4} y={4}/>
    <Hand cards={playerTwoCards} />
  </div>
);

export default App;

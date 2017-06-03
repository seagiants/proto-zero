import React from "react";
import ActionBoard from "./components/ActionBoard";
import DrawBoard from "./components/DrawBoard";
import Hand from "./components/Hand";
import MapDisplay from "./components/MapDisplay";
import Chat from "./components/Chat";

const styles = {
  display: "flex",
  flexDirection: "column"
};

const App = () => (
  <div style={styles}>
    <ActionBoard player="playerOne" />
    <DrawBoard player="playerOne" />
    <MapDisplay />
    <ActionBoard player="playerTwo" />
    <DrawBoard player="playerTwo" />
    <Chat />
  </div>
);

export default App;

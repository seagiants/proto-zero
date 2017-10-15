import React from "react";
import uniqueId from "lodash.uniqueid";

const getComponent = (gamesList, joinGame) => {
  let comp;
  if (gamesList !== null && gamesList !== undefined) {
    comp = gamesList.map(game => (
      <li key={uniqueId()}>
        Join game #{game.id}
        <button
          onClick={e => {
            e.preventDefault();
            joinGame(game.join, game.id);
          }}
        >
          JOIN!
        </button>
      </li>
    ));
  } else {
    comp = <p>No games</p>;
  }
  return comp;
};

const GamesList = props => (
  <div>{getComponent(props.gamesList, props.joinGame)}</div>
);

export default GamesList;

import React from "react";
import uniqueId from "lodash.uniqueid";

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [
        { id: "7d93fa08-9273-4459-aa05-0f5669422159" },
        { id: "e70dde47-2bee-4690-9017-8006841ceb4a" }
      ]
    };
  }

  componentDidMount() {
    // TODO here request the game list to the server
  }

  render() {
    return (
      <div>
        <button>New game</button>
        <ul>
          { this.state.games.map(game => <li key={uniqueId()}>Join game #{ game.id }</li>) }
        </ul>
      </div>
    );
  }
}

export default HomeScreen;

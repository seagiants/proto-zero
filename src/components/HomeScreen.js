import React from "react";
import uniqueId from "lodash.uniqueid";

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      games: null
    };
  }

  componentDidMount() {
    // FIXME hack, in the future use an action
    fetch("http://localhost:9000/games-list")
      .then(resp => {
        console.dir(resp);
        return resp.json();
      })
      .then(gamesList => {
        console.log(gamesList);
        this.setState({ games: gamesList });
      })
      .catch(error => {
        console.error("Error fetching games list", error);
      });
  }

  render() {
    let comp;
    if(this.state.games !== null) {
      comp = this.state.games.map(game => (
        <li key={uniqueId()}>Join game #{game.id}</li>
      ))
    } else {
      comp = <p>No games</p>
    }
    return (
      <div>
        <button>New game</button>
        <ul>
          {comp}
        </ul>
      </div>
    );
  }
}

export default HomeScreen;

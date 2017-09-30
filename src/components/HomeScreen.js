import React from "react";
import { connect } from "react-redux";
import uniqueId from "lodash.uniqueid";
import { askForGameCreation } from "../actions";

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
        return resp.json();
      })
      .then(gamesList => {
        this.setState({ games: gamesList });
      })
      .catch(error => {
        console.error("Error fetching games list", error);
      });
  }

  render() {
    let comp;
    if (this.state.games !== null) {
      comp = this.state.games.map(game => (
        <li key={uniqueId()}>Join game #{game.id}</li>
      ));
    } else {
      comp = <p>No games</p>;
    }
    return (
      <div>
        <button
          onClick={e => {
            e.preventDefault();
            this.props.click();
          }}
        >
          New game
        </button>
        <ul>{comp}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => state;

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    click: () => {
      dispatch(askForGameCreation("Bibi"));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

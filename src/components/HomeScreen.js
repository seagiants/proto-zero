import React from "react";
import { connect } from "react-redux";
import uniqueId from "lodash.uniqueid";
import {
  askForGameCreation,
  askForGamesList,
  joinGame
} from "../actions/serverThunks.js";

const styles = {
  display: "flex",
  flexDirection: "column"
};

class HomeScreen extends React.Component {
  componentDidMount() {
    this.props.getGamesList();
  }

  render() {
    let comp;
    if (this.props.gamesList !== null && this.props.gamesList !== undefined) {
      comp = this.props.gamesList.map(game => (
        <li key={uniqueId()}>
          Join game #{game.id}
          <button
            onClick={e => {
              e.preventDefault();
              this.props.joinGame(game.join, game.id);
            }}
          >
            JOIN!
          </button>
        </li>
      ));
    } else {
      comp = <p>No games</p>;
    }
    return (
      <div style={styles}>
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

const mapStateToProps = state => {
  return { gamesList: state.uiState.gamesList };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    click: () => {
      dispatch(askForGameCreation("Bibi"));
    },
    getGamesList: () => {
      dispatch(askForGamesList());
    },
    joinGame: (url, id) => {
      dispatch(joinGame(url, id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

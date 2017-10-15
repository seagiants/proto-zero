import React from "react";
import { connect } from "react-redux";
import {
  askForGameCreation,
  askForGamesList,
  joinGame
} from "../actions/serverThunks.js";
import GamesList from "./GamesList";

const styles = {
  display: "flex",
  flexDirection: "column"
};

class HomeScreen extends React.Component {
  componentDidMount() {
    this.props.getGamesList();
  }

  render() {
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
        <GamesList gamesList={this.props.gamesList} joinGame={this.props.joinGame} />
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

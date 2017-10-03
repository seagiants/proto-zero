import React from "react";
import { connect } from "react-redux";
import uniqueId from "lodash.uniqueid";
import { askForGameCreation, askForGamesList } from "../actions";

const styles = {
  display: "flex",
  flexDirection: "column"
};

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      games: null
    };
  }

  componentDidMount() {
    this.props.getGamesList();
  }

  render() {
    let comp;
    if (this.props.gamesList !== null && this.props.gamesList !== undefined) {
      comp = this.props.gamesList.map(game => (
        <li key={uniqueId()}>Join game #{game.id}</li>
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
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

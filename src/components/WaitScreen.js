import React from "react";
import { connect } from "react-redux";
import { registerWebSocket } from "../actions/serverThunks";

const waitingDots = () => {
  let numberOfDot = 0;
  const dot = ".";
  return () => {
    numberOfDot += 1;
    return dot.repeat(numberOfDot % 4);
  };
};

class WaitScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dots: ""
    };
  }

  componentDidMount() {
    this.props.registerWebSocket(this.props.gameId, this.props.playerId);
    const makeDots = waitingDots();
    setInterval(() => {
      this.setState({ dots: makeDots() });
    }, 450);
  }

  render() {
    return <div>{`Waiting for a challenger${this.state.dots}`}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    gameId: state.gameState.gameId,
    playerId: state.playersState.playerOne.name
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    registerWebSocket: (gameId, playerId) => {
      dispatch(registerWebSocket(gameId, playerId));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WaitScreen);

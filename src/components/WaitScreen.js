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
    const id = setInterval(() => {
      this.setState({ dots: makeDots() });
    }, 450);
    this.setState({intervalFnId: id});
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalFnId);
  }

  // FIXME For test only
  testSocket() {
    this.props.socket.send("A message from the wait screen");
  }

  render() {
    return (
      <div>
        <p>{`Waiting for a challenger${this.state.dots}`}</p>
        <button
          onClick={e => {
            e.preventDefault();
            this.testSocket();
          }}
        >
          TEST SOCKET
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    gameId: state.gameState.gameId,
    playerId: state.playersState.playerOne.name,
    socket: state.gameState.socket
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    registerWebSocket: (gameId, playerId) => {
      dispatch(registerWebSocket(gameId, playerId));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WaitScreen);

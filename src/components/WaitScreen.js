import React from "react";

const waitingDots = () => {
  let numberOfDot = 0;
  const dot = ".";
  return () => {
    numberOfDot += 1;
    return dot.repeat(numberOfDot % 4);
  }
}

class WaitScreen extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        dots: ""
      }
  }

  componentDidMount() {
    const makeDots = waitingDots();
    setInterval(() => {
      this.setState({ dots: makeDots() });
    }, 450);
  }

  render() {
    return(<div>{`Waiting for a challenger${this.state.dots}`}</div>)
  }
}

export default WaitScreen;

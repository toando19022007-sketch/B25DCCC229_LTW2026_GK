import React, { Component } from "react";

class WorkTimer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0,
    };
    this.timer = null;
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState((prevState) => ({ seconds: prevState.seconds + 1 }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <p>
        <strong>Đã xem: {this.state.seconds} giây</strong>
      </p>
    );
  }
}

export default WorkTimer;

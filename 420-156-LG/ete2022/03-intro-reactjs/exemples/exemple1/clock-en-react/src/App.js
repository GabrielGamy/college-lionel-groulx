import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: null,
      showTime: true,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setTime();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  setTime = () => {
    var now = new Date();
    const time = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
    this.setState({ time });
  };

  toggleTimeHandler = () => {
    const showTime = !this.state.showTime;
    this.setState({ showTime });
  };

  render() {
    return (
      <>
        <header>Clock App</header>
        <div className="clock-container">
          {this.state.showTime && <div id="clock">{this.state.time}</div>}
          <button className="toggle-btn" onClick={this.toggleTimeHandler}>
            {this.state.showTime ? "Hide clock" : "Show clock"}
          </button>
        </div>
      </>
    );
  }
}

export default App;

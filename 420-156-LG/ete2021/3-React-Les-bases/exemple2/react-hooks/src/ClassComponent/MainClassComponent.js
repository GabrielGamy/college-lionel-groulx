import React from 'react';
import ClockClassComponent from './ClockClassComponent';

class MainClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showTime: true }
  }

  toggleTimeHandler = () => {
    const showTime = !this.state.showTime;
    this.setState({ showTime });
  }

  render() {
    return (
      <div className="app">
        <header>Clock Class Component App</header>
       { this.state.showTime && <ClockClassComponent /> }
        <button className="toggle-btn" onClick={this.toggleTimeHandler}>
            { this.state.showTime ? "Hide clock" : "Show clock" }
        </button>
      </div>
    );
  }
}

export default MainClassComponent;

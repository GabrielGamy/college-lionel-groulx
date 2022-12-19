import React from "react";
import Card from "./Card";
import Hello from "./Hello";
import "./App.css";

class App extends React.Component {
  state = { name: "le monde" };

  onChangeName = (event) => {
    let newName = event.target.value;
    this.setState({ name: newName });
  };

  render() {
    return (
      <div className="App">
        <Card>
          <Hello name={this.state.name} />
          <input
            type="text"
            value={this.state.name}
            onChange={this.onChangeName}
          />
        </Card>
      </div>
    );
  }
}

export default App;

import * as React from "react";
import Hello from "./Hello.js";

class App extends React.Component {
  state = { name: "la classe" };

  updateName = (name) => {
    this.setState({ name: name });
  };

  render() {
    return (
      <>
        <Hello update={this.updateName} />
        <div>Bonjour {this.state.name}</div>
      </>
    );
  }
}

export default App;

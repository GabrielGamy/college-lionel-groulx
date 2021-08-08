import Hello from './Hello';

import './App.css';
import React from 'react';

class App extends React.Component {
  state = { name: "le monde" };

  onChangeName = (event) => {
    let newName = event.target.value;
    this.setState({ name: newName });
  }

  render() {
    return (
      <div className="App">
          <Hello name={this.state.name}/>
          <input type="text" 
                 value={this.state.name} 
                 onChange={this.onChangeName} />
      </div>
    );
  }
}

export default App;

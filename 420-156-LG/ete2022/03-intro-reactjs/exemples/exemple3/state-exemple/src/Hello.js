import React from "react";

class Hello extends React.Component {
  state = { inputValue: "La classe" };

  onChangeName = (event) => {
    this.setState({ inputValue: event.target.value });
    this.props.update(event.target.value);
  };

  render() {
    return (
      <input
        type="text"
        placeholder="Entrer le nom"
        value={this.state.inputValue}
        onChange={this.onChangeName}
      />
    );
  }
}

export default Hello;

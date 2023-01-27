import React from "react";
import Modal from "./Modal";

export default class GuessMyNumber extends React.Component {
  state = {
    showModal: false,
    errorMessage: "",
  };

  render() {
    return (
      <div>
        {this.state.showModal && <Modal message={this.state.errorMessage} />}
        <h2>Devinez le chiffre magique</h2>
        <input
          type={"text"}
          name="chiffre"
          placeholder="Entrez le chiffre magique"
        />
        <button type="button">Valider</button>
        <button type="button">Effacer</button>
      </div>
    );
  }
}

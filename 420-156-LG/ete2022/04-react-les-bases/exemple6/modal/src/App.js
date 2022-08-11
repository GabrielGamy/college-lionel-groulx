import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Modal from "./components/Modal/Modal";

class App extends React.Component {
  state = {
    showModal: false,
  };

  openModal() {
    this.setState({ showModal: true });
  }

  closeModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Modal show={this.state.showModal} handleClose={this.closeModal}>
          <h2>Message!</h2>
          <div className="modal-text">
            Le chiffre que vous avez saisi est inferieur au chiffre magique.
          </div>
        </Modal>
        <button className="button button12" onClick={this.openModal.bind(this)}>
          Show Modal
        </button>
      </div>
    );
  }
}

export default App;

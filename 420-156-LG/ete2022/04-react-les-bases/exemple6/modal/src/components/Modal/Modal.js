import "./Modal.css";
import React from "react";

class Modal extends React.Component {
  render() {
    let showHideClassName = "modal display-none";

    if (this.props.show) {
      showHideClassName = "modal display-block";
    }

    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          {this.props.children}
          <button
            className="button button10"
            type="button"
            onClick={this.props.handleClose}
          >
            Close
          </button>
        </section>
      </div>
    );
  }
}

export default Modal;

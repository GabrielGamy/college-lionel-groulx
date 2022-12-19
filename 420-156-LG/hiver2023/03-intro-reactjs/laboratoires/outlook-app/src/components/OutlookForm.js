import React from "react";

class OutlookForm extends React.Component {
  state = {
    subject: this.props.subject,
    to: "",
    message: "",
  };

  effacer = () => {
    this.setState({
      subject: "",
      to: "",
      message: "",
    });
  };

  envoyer = (event) => {
    event.preventDefault();
    this.props.envoyer(this.state);
  };

  render() {
    return (
      <form encType="text/plain">
        <div className="input-container">
          <label className="label" htmlFor="to">
            À:
          </label>
          <input
            className="input"
            id="to"
            type="text"
            name="to"
            onChange={(event) => {
              this.setState({ to: event.target.value });
            }}
            value={this.state.to}
          />
        </div>
        <div className="input-container">
          <label className="label" htmlFor="subject">
            Objet:
          </label>
          <input
            className="input"
            id="subject"
            type="text"
            name="subject"
            onChange={(event) => {
              this.setState({ subject: event.target.value });
            }}
            value={this.state.subject}
          />
        </div>
        <div>
          <label htmlFor="message">Votre Message:</label>
          <br />
          <textarea
            id="message"
            rows="10"
            cols="80"
            onChange={(event) => {
              this.setState({ message: event.target.value });
            }}
            value={this.state.message}
          ></textarea>
        </div>
        <div>
          <input
            className="button"
            type="submit"
            value="Envoyer"
            onClick={this.envoyer}
          />
          <input
            className="button button-orange"
            type="reset"
            value="Effacer"
            onClick={this.effacer}
          />
        </div>
      </form>
    );
  }
}

export default OutlookForm;

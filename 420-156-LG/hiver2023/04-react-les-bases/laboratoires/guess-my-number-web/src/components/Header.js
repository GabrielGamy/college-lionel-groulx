import React from "react";
import logo from "../logo.svg";
import "../App.css";

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <div>Guess My Number</div>
        <img className="logo" src={logo} alt="Logo React.js"></img>
      </header>
    );
  }
}

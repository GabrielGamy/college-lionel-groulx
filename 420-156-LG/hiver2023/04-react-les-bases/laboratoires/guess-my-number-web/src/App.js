import "./App.css";
import React from "react";
import Header from "./components/Header";
import GuessMyNumber from "./components/GuessMyNumber";
import Rules from "./components/Rules";

export default class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <GuessMyNumber />
        <Rules />
      </>
    );
  }
}

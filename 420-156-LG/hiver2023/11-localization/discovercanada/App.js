import React from "react";
import Header from "./components/Header";
import StateScreen from "./screens/StateScreen";

export default class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <StateScreen />
      </>
    );
  }
}
import React from "react";
import { StatusBar } from "react-native";
import Header from "./components/Header";
import StateScreen from "./screens/StateScreen";

export default class App extends React.Component {
  render() {
    return <>
      <Header />
      <StateScreen />
      <StatusBar
        animated={true}
        backgroundColor="#D80621"
        color="white"
        barStyle={'default'}
        showHideTransition={'slide'}
        hidden={false} />
    </>
  }
}
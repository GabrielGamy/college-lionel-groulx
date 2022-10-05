import React from "react";
import { StatusBar } from "react-native";
import Header from "./components/Header";
import constants from "./constants";
import StateScreen from "./screens/StateScreen";

export default class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <StateScreen />
        <StatusBar
          animated={true}
          backgroundColor={constants.primaryColor}
          color="white"
          barStyle={"default"}
          showHideTransition={"slide"}
          hidden={false}
        />
      </>
    );
  }
}

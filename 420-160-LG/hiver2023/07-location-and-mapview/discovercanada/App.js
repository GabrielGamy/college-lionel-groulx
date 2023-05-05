import React from "react";
import AppNavigation from "./navigation/AppNavigation";
import { LogBox } from "react-native";

export default class App extends React.Component {
  componentDidMount() {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  }

  render() {
    return <AppNavigation />;
  }
}

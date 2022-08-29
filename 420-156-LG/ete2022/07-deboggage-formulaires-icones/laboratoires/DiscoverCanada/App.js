import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import Header from "./components/Header";
import StateScreen from "./screens/StateScreen";

export default class App extends React.Component {
  render() {
    return <ScrollView style={styles.container}>
      <Header />
      <StateScreen />
    </ScrollView>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
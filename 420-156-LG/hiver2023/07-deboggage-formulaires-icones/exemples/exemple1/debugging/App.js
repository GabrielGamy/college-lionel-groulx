import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./header";

export default class App extends React.Component {
  debuggingTodayDate_01 = () => {
    let today = new Date().toLocaleDateString();
    return today;
  };

  debuggingTodayDate_02 = () => {
    var today = new Date();
    var day = String(today.getDate() + 2);
    var month = String(today.getMonth() + 3); //January is 0!
    var year = today.getFullYear();
    return `${month}/${day}/${year}`;
  };

  render() {
    return (
      <>
        <Header title="Debugging"></Header>
        <View style={styles.container}>
          <Text>Les dates 01 et 02 ci-dessous sont différentes.</Text>
          <Text>Trouvons le problème avec le deboggage.</Text>
          <Text>Today 01: {this.debuggingTodayDate_01()}</Text>
          <Text>Today 02: {this.debuggingTodayDate_02()}</Text>
          <StatusBar style="auto" />
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

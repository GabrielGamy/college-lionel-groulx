import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";

export class Header extends React.Component {
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>Reveil Matin</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#0057D8",
    paddingTop: Platform.OS === "android" ? 20 : 40,
    paddingBottom: Platform.OS === "android" ? 10 : 16,
  },
  headerText: {
    color: "white",
    fontSize: 28,
    textAlign: "center",
  },
});

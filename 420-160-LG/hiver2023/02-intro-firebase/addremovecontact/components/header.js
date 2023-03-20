import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";

class Header extends React.Component {
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>Contacts</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    paddingTop: Platform.OS == "ios" ? 45 : 25,
    paddingBottom: 16,
    backgroundColor: "#1E90FF",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    textAlign: "center"
  }
});
export default Header;
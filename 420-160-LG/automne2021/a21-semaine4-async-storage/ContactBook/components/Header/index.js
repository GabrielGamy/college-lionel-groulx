import React from "react";
import { View, Text, StyleSheet, Platform, StatusBar } from "react-native";
import Constants from "../../constants";

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>MES CONTACTS</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Constants.primary,
    paddingTop: StatusBar.currentHeight + 32,
    paddingBottom: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 20,
    color: Constants.primaryText,
  },
});

export default Header;

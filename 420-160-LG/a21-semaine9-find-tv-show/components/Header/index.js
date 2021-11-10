import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native"; 
import Contants from "../../constants";

const Header = () => {
  return <View style={styles.container}>
    <Text style={styles.headerText}>TV MAVE SHOWS</Text>
  </View>
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Contants.primary,
    paddingTop: Platform.OS === "ios" ? 64 : 32,
    paddingBottom: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 20
  }
});

export default Header;
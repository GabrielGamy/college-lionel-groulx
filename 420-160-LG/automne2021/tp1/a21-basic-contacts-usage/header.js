import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native"; 

const Header = () => {
  return <View style={styles.container}>
    <Text style={styles.headerText}>CONTACTS</Text>
  </View>
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "teal",
    paddingTop: Platform.OS === "ios" ? 64 : 32,
    paddingBottom: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 20,
    color: 'white'
  }
});

export default Header;
import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{props.headerTitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    paddingTop: 35,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "teal",
    borderBottomColor: "teal",
    borderBottomWidth: 1,
  },
  headerText: {
    color: "white",
    fontSize: 16,
  },
});

export default Header;

import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons'; 

class Header extends React.Component {
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>Discover Canada</Text>
        <FontAwesome5 name="canadian-maple-leaf" size={24} color="white" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 8,
    paddingTop: Platform.OS == "ios" ? 45 : 30,
    paddingBottom: 20,
    backgroundColor: "#D80621",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  }
});
export default Header;
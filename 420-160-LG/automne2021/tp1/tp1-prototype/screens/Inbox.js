import React from "react";
import { View, Text, StyleSheet } from "react-native";

function Inbox(props) {
  return (
    <View style={styles.container}>
      <Text>Inbox</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Inbox;

import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const StartGameScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.startGametText}>Start a new Game</Text>
      <TouchableOpacity style={styles.startBtn} onPress={() => props.start()}>
        <Text style={styles.startBtnText}>Start</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 32,
    height: 300,
    backgroundColor: "teal",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 16,
  },
  startGametText: {
    color: "white",
    fontSize: 26,
    fontWeight: "bold",
  },
  startBtn: {
    backgroundColor: "white",
    borderRadius: 32,
    padding: 16,
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
  },
  startBtnText: {
    color: "teal",
    fontSize: 16,
  },
});

export default StartGameScreen;

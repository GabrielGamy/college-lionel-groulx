import React from "react";
import { View, Text, StyleSheet } from "react-native";

const NameIndicator = (props) => {
  const getFormattedName = () => {
    const { nameToGuess, currentRound } = props;
    let formattedValue = "";
    for (var i = currentRound; i > 0; i--) {
      formattedValue += "*";
    }
    return (
      nameToGuess.substr(0, nameToGuess.length - currentRound) + formattedValue
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Remaining round: {props.currentRound}</Text>
      <Text style={styles.text}>Name Indicator: {getFormattedName()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
  },
  text: {
    color: "white",
    fontSize: 20,
  },
});

export default NameIndicator;

import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default class FormInput extends Component {
  render() {
    const { label, placeholder, type, isSecure, value, onChangeText } =
      this.props;
    return (
      <View style={styles.inputContainer}>
        <Text>{label}</Text>
        <TextInput
          style={styles.input}
          autoComplete={type}
          secureTextEntry={isSecure}
          placeholder={placeholder}
          onChangeText={onChangeText}
          value={value}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 8,
    marginHorizontal: 16,
  },
  input: {
    width: "100%",
    height: 36,
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 8,
    marginTop: 2,
  },
});

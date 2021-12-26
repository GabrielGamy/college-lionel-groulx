import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Constants from '../constants';

export default class FormInput extends Component {
  render() {
    const { label, type, isSecure, value, onChangeText } = this.props;
    return (
      <View style={styles.inputContainer}>
        <Text>{label}</Text>
        <TextInput
          style={styles.input}
          autoCompleteType={type}
          secureTextEntry={isSecure}
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
    width: '100%',
    height: 36,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    marginTop: 2,
  },
});

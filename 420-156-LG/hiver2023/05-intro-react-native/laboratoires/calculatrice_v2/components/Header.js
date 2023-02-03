import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>Calculatrice</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'teal',
    padding: 16,
    paddingTop: Platform.OS == "ios" ? 40 : 16
  },
  headerText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20
  },
});

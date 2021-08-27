/**
 * Programmation d'applications mobiles 1 - Collège Lionel-Groulx
 * Calculatrice simple version 2
 */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class App extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.header}>
          <Text style={styles.headerText}>Calculatrice</Text>
        </View>
        <View style={styles.result}>
          <Text style={styles.resultText}>12 X 2</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'teal',
    paddingTop: 36,
    paddingBottom: 12,
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
  result: {
    marginTop: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: 'teal',
    marginHorizontal: 8
  },
  resultText: {
    fontSize: 32
  }
});

export default App;

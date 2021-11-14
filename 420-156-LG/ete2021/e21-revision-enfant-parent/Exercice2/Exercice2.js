import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

/**
 * Exercice 2
 * - Passer le message dans le composant Enfant en paramètre avec Props
 */
class Enfant extends React.Component {
  render() {
    return (
      <>
        <Text>Enfant</Text>
        <Text>Message dans le composant enfant</Text>
      </>
    )
  }
}

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Enfant />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
  },
});

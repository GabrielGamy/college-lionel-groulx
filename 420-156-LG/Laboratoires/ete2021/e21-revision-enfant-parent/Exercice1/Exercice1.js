import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

/**
 * Exercice 1
 * - Créer un composant Enfant
 * - Déplacer la ligne 13 et 14 dans le composant Enfant
 */
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Enfant</Text>
        <Text>Message dans le composant enfant</Text>
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

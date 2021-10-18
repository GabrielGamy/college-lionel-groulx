import * as React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

/**
 * Exercice 5
 * - Declancher l'appel de onChangeMessage() au clic du bouton dans le composant Enfant.
 */
class Enfant extends React.Component {
  render() {
    return (
      <>
        <Text>Enfant</Text>
        <Button title="Change Message" />
      </>
    )
  }
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Message dans le composant enfant"
    }
  }

  onChangeMessage = (message) => {
    this.setState({ message: message });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.message}</Text>
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

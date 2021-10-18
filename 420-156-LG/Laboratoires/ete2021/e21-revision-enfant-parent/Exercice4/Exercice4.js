import * as React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

/**
 * Exercice 4
 * - Declancher l'appel de onChangeMessage() au clic du bouton dans le composant Enfant.
 */
class Enfant extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Message dans le composant enfant"
    }
  }

  onChangeMessage = () => {
    this.setState({ message: "Oups! le message vient de changet."});
  }

  render() {
    return (
      <>
        <Text>Enfant</Text>
        <Text>{this.state.message}</Text>
        <Button title="Change Message" />
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

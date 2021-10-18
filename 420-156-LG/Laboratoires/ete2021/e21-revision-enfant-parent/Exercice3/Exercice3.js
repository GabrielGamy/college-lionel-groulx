import * as React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

/**
 * Exercice 3
 * - Passer la fonction onChangeMessage() à l'enfant
 * - Declancher l'appel de onChangeMessage() au clic du bouton dans le composant Enfant.
 */
class Enfant extends React.Component {
  render() {
    return (
      <>
        <Text>Enfant</Text>
        <Text>{this.props.message}</Text>
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

  onChangeMessage = () => {
    this.setState({ message: "Oups! le message vient de changet."})
  }

  render() {
    return (
      <View style={styles.container}>
        <Enfant message={this.state.message} />
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

import * as React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

/**
 * Exercice 3
 * - Passer la fonction onChangeMessage() à l'enfant
 * - Declancher l'appel de onChangeMessage() au clic du bouton dans le composant Enfant.
 */
class Enfant extends React.Component {
  onPressButton = () => {
    this.props.setMessage();
  }

  render() {
    return (
      <>
        <Text>Enfant</Text>
        <Text>{this.props.message}</Text>
        {/** Technique 1 - La fonction ne prend aucun paramètre */}
        {/**<Button title="Change Message" onPress={this.props.setMessage} />*/}

        {/** Technique 2 - La fonction ne prend aucun paramètre */}
        {/**<Button title="Change Message" onPress={this.onPressButton} />*/}

        {/** Technique 3 - Fonction anonyme  */}
        <Button title="Change Message" onPress={() => this.props.setMessage()} />
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
        <Enfant message={this.state.message} setMessage={this.onChangeMessage} />
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

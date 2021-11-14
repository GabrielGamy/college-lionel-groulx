/**
 * Programmation d'applications mobiles 2 - Collège Lionel-Groulx
 * Exercice 2:
 *  Transformer ce composant en fonction 
 *  Utiliser useState pour les différents state du composant Body
 */
import * as React from 'react';
import { Text, View, StyleSheet, Image, Button, TextInput, Alert } from 'react-native';
import Constants from 'expo-constants';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={require('./../assets/snack-icon.png')}
            style={styles.image}
          />
        </View>
        <View style={styles.errorBox}>
          <Text>Message invalide</Text>
        </View>
        <Body />
      </View>
    );
  }
}

class Body extends React.Component {
  state = {
    message: '',
    taille: 0,
  };

  envoyerMessage = () => {
    Alert.alert('Message', this.state.message)
    Alert.alert('Taille', this.state.taille)
  }

  render() {
    return (
      <View style={styles.body}>
        <Text>Saisir un message: </Text>
        <TextInput
          value={this.state.message}
          style={styles.input}
          placeholder="Votre message"
          onChangeText={(text) => this.setState({ message: text })}
        />

        <Text>Longueur maximale du message: </Text>
        <TextInput
          value={this.state.taille}
          style={styles.input}
          placeholder="Taille maximale"
          onChangeText={(text) => this.setState({ taille: text })}
        />

        <Button title="Envoyer Message" onPress={this.envoyerMessage} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 100,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    margin: 12,
  },
  input: {
    height: 40,
    marginVertical: 12,
    borderWidth: 1,
    padding: 10,
    width: '100%',
  },
  errorBox: {
    backgroundColor: 'orange',
    padding: 10,
    margin: 8,
    borderRadius: 8,
  },
});

/**
 * Programmation d'applications mobiles 2 - Collège Lionel-Groulx
 * Exercice 1:
 *  Utilsier le state pour le message et la taille maximale.
 */
import * as React from 'react';
import { Text, View, StyleSheet, Image, Button, TextInput } from 'react-native';
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
  render() {
    return (
      <View style={styles.body}>
        <Text>Saisir un message: </Text>
        <TextInput style={styles.input} placeholder="Votre message" />

        <Text>Longueur maximale du message: </Text>
        <TextInput style={styles.input} placeholder="Taille maximale" />

        <Button title="Envoyer Message" />
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
    width: '100%'
  },
  errorBox: {
    backgroundColor: "orange",
    padding: 10,
    margin: 8,
    borderRadius: 8
  }
});

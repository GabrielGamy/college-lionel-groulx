/**
 * Programmation d'applications mobiles 2 - Collège Lionel-Groulx
 * Exercice 4:
 *  Valider le message en fonction de la taille.
 *  Si le message est invalide (sa taille est supérieure à la taille maximale), alors afficher le messaage d'erreur.
 */
import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  TextInput,
  Alert,
} from 'react-native';
import Constants from 'expo-constants';

const App = () => {
  const [showError, setShowError] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('./../assets/snack-icon.png')}
          style={styles.image}
        />
      </View>
      {showError && (
        <View style={styles.errorBox}>
          <Text>Message invalide</Text>
        </View>
      )}
      <Body />
    </View>
  );
};

const Body = () => {
  const [message, setMessage] = useState('');
  const [taille, setTaille] = useState(0);

  const envoyerMessage = () => {
    Alert.alert('Message', message);
    Alert.alert('Taille', taille);
  };

  return (
    <View style={styles.body}>
      <Text>Saisir un message: </Text>
      <TextInput
        value={message}
        style={styles.input}
        placeholder="Votre message"
        onChangeText={(text) => setMessage(text)}
      />

      <Text>Longueur maximale du message: </Text>
      <TextInput
        value={taille}
        style={styles.input}
        placeholder="Taille maximale"
        onChangeText={(text) => setTaille(text)}
      />

      <Button title="Envoyer Message" onPress={envoyerMessage} />
    </View>
  );
};

export default App;

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

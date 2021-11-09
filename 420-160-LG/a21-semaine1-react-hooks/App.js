/**
 * Programmation d'applications mobiles 2 - Collège Lionel-Groulx
 * Exercice 5:
 *  Ajouter les messages valides dans une liste de messages
 *  Afficher la liste en dessous du boutton "Envoyer Message"
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
  FlatList,
} from 'react-native';
import Constants from 'expo-constants';

const App = () => {
  const [showError, setShowError] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('./assets/snack-icon.png')}
          style={styles.image}
        />
      </View>
      {showError && (
        <View style={styles.errorBox}>
          <Text>Message invalide</Text>
        </View>
      )}
      <Body setShowError={setShowError} />
    </View>
  );
};

const Body = (props) => {
  const [message, setMessage] = useState('');
  const [taille, setTaille] = useState(0);
  const [messageList, setMessageList] = useState([]);

  const envoyerMessage = () => {
    if (message.length > taille) {
      props.setShowError(true);
    } else {
      props.setShowError(false);
      const newMessage = {
        id: new Date().getUTCMilliseconds(),
        value: message,
      };
      const newMessageList = [...messageList, newMessage];
      setMessageList(newMessageList);
    }
  };

  const onChangeTaille = (text) => {
    if (text.length) {
      setTaille(parseInt(text));
    } else {
      setTaille(0);
    }
  };

  const renderMessageItem = ({ item }) => {
    return <Text style={styles.messageItem}>{item.value}</Text>;
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
        onChangeText={onChangeTaille}
      />

      <Button title="Envoyer Message" onPress={envoyerMessage} />

      <View>
        <Text style={styles.messageTitle}>MESSAGES</Text>
        <FlatList
          data={messageList}
          renderItem={renderMessageItem}
          keyExtractor={(item) => item.id}
        />
      </View>
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
  messageTitle: {
    marginTop: 16,
    margin: 6,
    fontSize: 20,
    color: 'green',
  },
  messageItem: {
    padding: 6,
    borderBottomColor: 'green',
    borderBottomWidth: 1,
  },
});

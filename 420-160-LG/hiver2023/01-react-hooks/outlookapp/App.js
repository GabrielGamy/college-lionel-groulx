import React, { useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  Button,
  Dimensions,
  Alert
} from 'react-native';
import Header from './components/Header';

function App() {
  const [toEmail, setToEmail] = useState('someone@gmail.com');
  const [subject, setSubject] = useState('Hello');
  const [message, setMessage] = useState('');

  const envoyerMessage = () => {
    Alert.alert('Message', 'Message envoyé!');
  }

  return (
    <View style={styles.container}>
      <Header />

      <View style={{ marginHorizontal: 12, marginVertical: 30 }}>
        <Text style={{ fontSize: 20, textAlign: 'center' }}>
          Outlook - Collège Lionel-Groulx
        </Text>
      </View>

      <View style={styles.inputBox}>
        <TextInput
          style={styles.input}
          placeholder="A"
          value={toEmail}
          onChangeText={(text) => setToEmail(text)}
        />
      </View>

      <View style={styles.inputBox}>
        <TextInput
          style={styles.input}
          placeholder="Objet"
          value={subject}
          onChangeText={(text) => setSubject(text)}
        />
      </View>

      <View style={{ margin: 12 }}>
        <Text>Message:</Text>
      </View>

      <View style={styles.inputBox}>
        <TextInput
          style={[styles.input, { height: 100 }]}
          multiline={true}
          numberOfLines={5}
          value={message}
          onChangeText={(text) => setMessage(text)}
        />
      </View>

      <View style={{ width: 100, margin: 12 }}>
        <Button title="Envoyer" color="#0074D9" onPress={envoyerMessage} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputBox: {
    flexDirection: 'row',
  },
  input: {
    height: 40,
    width: Dimensions.get('screen').width - 24,
    marginVertical: 4,
    marginHorizontal: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
  },
});

export default App;

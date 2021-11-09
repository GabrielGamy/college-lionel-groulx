/**
 * Programmation d'applications mobiles 2 - Collège Lionel-Groulx
 * Transformer le composant App.js en fonction
 */
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Alert,
} from 'react-native';
import Header from './components/Header';
import Contants from './constants';
import UserList from './components/UserList';

const App = () => {
  const [userName, setUserName] = useState('Gamy');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    findUser();
  }, [userName])

  const findUser = () => {
    if (userName.length) {
      setIsLoading(true);
      fetch('https://api.github.com/search/users?q=' + userName)
        .then((response) => response.json())
        .then((result) => {
          if (result.errors && result.errors.length) {
            setData(result.message, false, []);
          } else {
            setData('', false, result.items);
          }
        })
        .catch((error) => {
          setData(error.message, false, []);
        });
    } else {
      Alert.alert('Invalid user name', 'Please enter a vaild user name!');
    }
  };

  const setData = (error, loading, userList) => {
    setErrorMessage(error);
    setIsLoading(loading);
    setUsers(userList);
  };

  return (
    <>
      <Header />
      <View style={styles.findInputContainer}>
        <TextInput
          style={styles.findInput}
          placeholder="Enter user name"
          value={userName}
          onChangeText={setUserName}
        />
        <TouchableOpacity style={styles.findBtn} onPress={findUser}>
          <Text>Find</Text>
        </TouchableOpacity>
      </View>
      {isLoading && <Text style={styles.centerText}>Loading ...</Text>}
      {errorMessage.length > 0 && (
        <Text style={[styles.centerText, { color: 'red' }]}>
          {errorMessage}
        </Text>
      )}
      <UserList users={users} />
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  findInputContainer: {
    margin: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  findInput: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 8,
    borderRadius: 6,
    minHeight: 48,
    minWidth: 180,
  },
  findBtn: {
    backgroundColor: Contants.primary,
    minWidth: 80,
    textAlign: 'center',
    borderRadius: 8,
    minHeight: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerText: {
    textAlign: 'center',
  },
});

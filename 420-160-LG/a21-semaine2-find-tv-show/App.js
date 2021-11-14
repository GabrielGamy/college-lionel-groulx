/**
 * Programmation d'applications mobiles 1 - Collège Lionel-Groulx
 * Requetes HTTP - Fetch API
 * find tv shows
 */
import React, { useEffect, useState } from 'react';
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
import TVShows from './components/TVShows';

export default function App() {
  const [tvShowName, setTvShowName] = useState('all');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [shows, setShows] = useState([]);

  useEffect(() => {
    findTvShow(tvShowName);
  }, [tvShowName]);

  const findTvShow = (showName) => {
    fetch('https://api.tvmaze.com/search/shows?q=' + showName)
      .then((response) => response.json())
      .then((result) => {
        if (result.status && result.status === 400) {
          setData(result.message, false, []);
        } else {
          setData('', false, result);
        }
      })
      .catch((error) => {
        setData(error.message, false, []);
      });
  };

  const setData = (error, loading, showsList) => {
    setErrorMessage(error);
    setIsLoading(loading);
    setShows(showsList);
  };

  return (
    <>
      <Header />
      <View style={styles.findInputContainer}>
        <TextInput
          style={styles.findInput}
          placeholder="Find a show"
          value={tvShowName}
          onChangeText={setTvShowName}
        />
      </View>
      {isLoading && <Text style={styles.centerText}>Loading ...</Text>}
      {errorMessage.length > 0 && (
        <Text style={[styles.centerText, { color: 'red' }]}>
          {errorMessage}
        </Text>
      )}
      <TVShows shows={shows} />
    </>
  );
}

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

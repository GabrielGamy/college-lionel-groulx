import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  FlatList,
  Alert,
  Linking,
} from 'react-native';
import Header from './components/Header';

function App() {
  const [name, setName] = useState('ab');
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    getShows(name);
  }, [name]);

  getShows = (searchTerm) => {
    setLoading(true);
    fetch(`https://api.tvmaze.com/search/shows?q=${searchTerm}`, {
      mode: 'cors',
    })
      .then((response) => response.json())
      .then((data) => {
        setItems(data);
        setLoading(false);
      });
  };

  const openWebsite = async (websiteUrl) => {
    const supported = await Linking.canOpenURL(websiteUrl);

    if (supported) {
      await Linking.openURL(websiteUrl);
    } else {
      Alert.alert(`Don't know how to open this URL: ${websiteUrl}`);
    }
  };

  const renderItem = ({ item }) => {
    if (!item.show.image) return null;
    return (
      <View style={styles.movie}>
        <View>
          <Image
            source={{ uri: item.show.image.original }}
            style={{ width: 100, height: 120 }}
          />
        </View>
        <View style={{ marginLeft: 8 }}>
          <Text style={styles.movieAttr}>Name: {item.show.name}</Text>
          <Text style={styles.movieAttr}>
            Genres: {item.show.genres.join(', ')}
          </Text>
          <Text style={styles.movieAttr}>Premiered: {item.show.premiered}</Text>
          <TouchableOpacity
            style={styles.seeWebsiteBtn}
            onPress={() => openWebsite(item.show.officialSite)}>
            <Text style={{ color: 'white' }}>Website</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.searchBox}>
        <TextInput
          style={styles.input}
          placeholder="search"
          value={name}
          onChangeText={(name) => setName(name)}
        />
      </View>
      {loading && (
        <View style={styles.loading}>
          <Image
            source={require('./assets/Loading.gif')}
            style={{ height: 60, width: 60, marginBottom: 10 }}
          />
          <Text>loading...</Text>
        </View>
      )}
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
  },
  loading: {
    alignItems: 'center',
  },
  seeWebsiteBtn: {
    width: 100,
    borderRadius: 4,
    backgroundColor: '#18766d',
    padding: 8,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  movie: {
    flexDirection: 'row',
    padding: 12,
    margin: 4,
  },
  movieAttr: { marginBottom: 4 },
});

export default App;

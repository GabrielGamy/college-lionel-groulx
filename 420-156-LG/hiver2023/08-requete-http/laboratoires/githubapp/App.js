import React from 'react';
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
import { FontAwesome } from '@expo/vector-icons';

export default class App extends React.Component {
  state = {
    name: 'ab',
    loading: false,
    items: [],
  };

  componentDidMount() {
    this.getUsers(this.state.name);
  }

  getUsers = (searchTerm) => {
    this.setState({ loading: true });
    fetch(`https://api.github.com/search/users?q=${searchTerm}`, {
      mode: 'cors',
    })
      .then((response) => response.json())
      .then((data) => this.setState({ items: data.items, loading: false }));
  };

  openProfile = async (profileUrl) => {
    const supported = await Linking.canOpenURL(profileUrl);

    if (supported) {
      await Linking.openURL(profileUrl);
    } else {
      Alert.alert(`Don't know how to open this URL: ${profileUrl}`);
    }
  };

  renderItem = ({ item }) => {
    return (
      <View style={styles.user}>
        <View>
          <Image
            source={{ uri: item.avatar_url }}
            style={{ width: 90, height: 90, borderRadius: 50 }}
          />
          <Text>{item.login}</Text>
        </View>
        <TouchableOpacity
          style={styles.seeProfileBtn}
          onPress={() => this.openProfile(item.html_url)}>
          <Text style={{ color: 'white' }}>See Profile</Text>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <View style={styles.searchBox}>
          <TextInput
            style={styles.input}
            placeholder="search"
            value={this.state.name}
            onChangeText={(name) => this.setState({ name })}
          />
          <TouchableOpacity
            style={styles.searchBtn}
            onPress={() => this.getUsers(this.state.name)}>
            <FontAwesome name="search" size={24} color="white" />
          </TouchableOpacity>
        </View>
        {this.state.loading && (
          <View style={styles.loading}>
            <Image
              source={require('./assets/Loading.gif')}
              style={{ height: 60, width: 60, marginBottom: 10 }}
            />
            <Text>loading...</Text>
          </View>
        )}
        <FlatList
          data={this.state.items}
          keyExtractor={(item) => item.id}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
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
  searchBtn: {
    width: 48,
    borderRadius: 4,
    backgroundColor: '#0057D8',
    padding: 8,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loading: {
    alignItems: 'center',
  },
  seeProfileBtn: {
    width: 100,
    borderRadius: 4,
    backgroundColor: '#0057D8',
    padding: 8,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  user: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    padding: 16,
    margin: 8,
    borderRadius: 8,
  },
});

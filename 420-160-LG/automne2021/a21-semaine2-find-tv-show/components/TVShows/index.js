import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Linking,
  Alert,
  ScrollView,
} from 'react-native';
import Constants from '../../constants';

class TVShow extends React.Component {
  constructor(props) {
    super(props);
  }

  openShow = () => {
    const url = this.props.show.url;
    Linking.canOpenURL(url).then((supported) => {
      if (supported) {
        Linking.openURL(url);
      } else {
        Alert.alert('Error', "Don't know how to open URI: " + url);
      }
    });
  };

  render() {
    const { show } = this.props;
    if(!show.image) return null;
    return (
      <View style={styles.showItem}>
        <Image
          style={styles.showImage}
          source={{
            uri: show.image.medium,
          }}
        />
        <TouchableOpacity
          style={styles.showRepoContainer}
          onPress={this.openShow}>
          <Text style={styles.showRepoText}>Watch</Text>
        </TouchableOpacity>
        <Text style={styles.showNameText}>{show.name}</Text>
      </View>
    );
  }
}

export default class TVShows extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { shows } = this.props;
    return (
      <ScrollView>
        <Text style={styles.headerText}>TV Mave</Text>
        <View>
          {shows.map((item) => (
            <TVShow key={item.show.id} show={item.show} />
          ))}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  headerText: {
    textAlign: 'center',
    fontSize: 20,
  },
  showItem: {
    margin: 8,
    borderWidth: 1,
    borderColor: 'black',
    padding: 16,
    borderRadius: 8,
  },
  showImage: {
    width: '100%',
    height: 200,
  },
  showRepoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 6,
  },
  showRepoText: {
    color: 'blue',
  },
  showNameText: {
    backgroundColor: Constants.primary,
    padding: 10,
    textAlign: 'center',
    margin: 6,
  },
});

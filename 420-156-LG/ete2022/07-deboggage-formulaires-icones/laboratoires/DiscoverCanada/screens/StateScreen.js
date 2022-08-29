import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList
} from 'react-native';
import States from '../data/states';
import DiscoverCard from '../components/DiscoverCard';

export default class StateScreen extends React.Component {
  renderStateItem = ({ item }) => {
    return <DiscoverCard item={item} />;
  };

  render() {
    return (
      <View style={styles.screen}>
        <Text style={styles.screenHeaderText}>States</Text>
        <FlatList
          data={States}
          keyExtractor={(item) => item.name}
          renderItem={this.renderStateItem}
          style={{ flex: 1 }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    padding: 8,
  },
  screenHeaderText: {
    fontSize: 20,
    paddingVertical: 16,
    textAlign: 'center',
  },
});

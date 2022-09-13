import React from 'react';
import {
  View,
  StyleSheet,
  FlatList
} from 'react-native';
import { Text } from "@react-native-material/core";
import States from '../data/states';
import DiscoverCard from '../components/DiscoverCard';
import i18n from '../data/languages';

export default class StateScreen extends React.Component {
  renderStateItem = ({ item }) => {
    return <DiscoverCard item={item} />;
  };

  render() {
    return (
      <View style={styles.screen}>
        <Text variant="h5" style={styles.screenHeaderText}>{i18n.t('states')}</Text>
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
    flex: 1
  },
  screenHeaderText: {
    paddingVertical: 16,
    textAlign: 'center',
  },
});

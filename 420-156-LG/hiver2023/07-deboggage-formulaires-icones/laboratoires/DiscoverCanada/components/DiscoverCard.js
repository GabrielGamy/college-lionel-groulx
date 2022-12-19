import React from 'react';
import { Text, StyleSheet, TouchableOpacity, Image, View } from 'react-native';

export default class DiscoverCard extends React.Component {
  render() {
    const item = this.props.item;
    return (
      <View style={{ marginHorizontal: 16 }}>
        <TouchableOpacity style={styles.item}>
          <Image source={{ uri: item.image }} style={styles.image} />
          <Text>{item.name}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#F8F8FF',
    padding: 8,
    paddingBottom: 12,
    marginBottom: 6,
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 240,
  },
  image: {
    width: '100%',
    height: '80%',
  },
});

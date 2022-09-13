import React from 'react';
import { View, Image, Text, StyleSheet, Platform } from 'react-native';

export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.header}>
        <Image
          style={styles.image}
          source={require('../assets/GitHub-Mark-Light-32px.png')}
        />
        <View style={styles.github}>
          <Text style={{ color: 'white'}}>Github</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#24292f',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    paddingTop: Platform.OS == "ios" ? 45 : 30,
    paddingBottom: 20,
  },
  image: {
    width: 32,
    height: 30,
  },
  github: {
    borderColor: 'white',
    borderWidth: 1,
    padding: 4,
    textAlign: 'center',
    borderRadius: 4,
  },
});

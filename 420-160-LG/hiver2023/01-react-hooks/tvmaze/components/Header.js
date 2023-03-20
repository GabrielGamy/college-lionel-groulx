import React from 'react';
import { View, Image, Text, StyleSheet, Platform } from 'react-native';

export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.header}>
        <Image
          style={styles.image}
          source={require('../assets/tvm-header-logo.png')}
        />
        <View style={styles.headerTitle}>
          <Text style={{ color: 'white'}}>TV Shows</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#18766d',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    paddingTop: Platform.OS == "ios" ? 45 : 30,
    paddingBottom: 20,
  },
  image: {
    width: 100,
    height: 30,
  },
  headerTitle: {
    borderColor: 'white',
    borderWidth: 1,
    padding: 4,
    textAlign: 'center',
    borderRadius: 4,
  },
});

import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.header}>
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>Outlook App</Text>
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
    paddingTop: Platform.OS == 'ios' ? 45 : 30,
    paddingBottom: 20,
  },
});

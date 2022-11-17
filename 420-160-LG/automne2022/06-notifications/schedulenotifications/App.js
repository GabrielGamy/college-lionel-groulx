import React from 'react';
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import Header from './components/Header';
import ScheduleNotification from './components/ScheduleNotification';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <>
      <Header />
      <View style={styles.container}>
        <Card>
          <ScheduleNotification />
        </Card>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});

import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import ProfileImagePicker from './components/ProfileImagePicker';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Upload image from Gallery.
      </Text>
        <ProfileImagePicker />
    </View>
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
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

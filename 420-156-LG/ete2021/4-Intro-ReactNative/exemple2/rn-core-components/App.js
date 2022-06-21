import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Linking, View, Button } from 'react-native';

export default function App() {
  const onPressLearnMore = async () => {
    await Linking.openURL("https://reactnative.dev/docs/button");
  }

  return (
    <View style={styles.container}>
      <Button
        onPress={onPressLearnMore}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

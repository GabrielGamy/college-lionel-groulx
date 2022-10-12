import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

function NotificationsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Notifications Screen</Text>
      <View style={{ marginVertical: 8 }}>
        <Button title="Go to home" onPress={() => navigation.navigate('Home')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default NotificationsScreen;


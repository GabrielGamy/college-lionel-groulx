import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function ShopScreen() {
  return (
    <View style={styles.container}>
      <Text>Shop Screen</Text>
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

export default ShopScreen;

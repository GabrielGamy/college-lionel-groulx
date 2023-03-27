import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function ProductDetailScreen({ route }) {
  const { itemId, otherParam } = route.params;

  return (
    <View style={styles.container}>
      <Text>Product Detail Screen</Text>
      <Text>{itemId}</Text>
      <Text>{otherParam}</Text>
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

export default ProductDetailScreen;


import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

function ProductListingScreen(props) {
  return (
    <View style={styles.container}>
      <Text>Product Home Screen</Text>
      <View style={{ marginVertical: 4 }}>
        <Button
          title="Go to Details - Product 1"
          onPress={() =>
            props.navigation.navigate('Details', {
              itemId: 86,
              otherParam: 'Product 1 - Description',
            })
          }
        />
      </View>
      <View style={{ marginVertical: 4 }}>
        <Button
          title="Go to Details - Product 2"
          onPress={() =>
            props.navigation.navigate('Details', {
              itemId: 87,
              otherParam: 'Product 2 - Description',
            })
          }
        />
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

export default ProductListingScreen;

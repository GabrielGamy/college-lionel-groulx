import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

function ProductDetailScreen(props) {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => props.navigation.navigate("Cart")}>
        <Ionicons name="cart-outline" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 32,
    marginRight: 8,
    alignItems: 'flex-end',
  },
});

export default ProductDetailScreen;

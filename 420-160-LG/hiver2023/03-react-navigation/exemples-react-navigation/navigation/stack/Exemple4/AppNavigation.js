/**
 * Stack - Exemple 4
 * Passage de parametre vers un ecran Stack
 */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductDetailScreen from '../../../screens/ProductDetailScreen';
import ProductListingScreen from '../../../screens/ProductListingScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ProductListing"
          component={ProductListingScreen}
          options={{ title: 'Product Listing' }}
        />
        <Stack.Screen
          name="Details"
          component={ProductDetailScreen}
          options={{ title: 'Product Detail' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

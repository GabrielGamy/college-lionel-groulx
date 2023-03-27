/**
 * Mixed - Exemple 1
 * Plusieurs types de navigation
 */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProductDetailScreen from '../../../screens/ProductDetailScreen';
import ProductListingScreen from '../../../screens/ProductListingScreen';
import SettingsScreen from '../../../screens/SettingsScreen';
import ProfileScreen from '../../../screens/ProfileScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const HomePage = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="ProductListing"
        component={ProductListingScreen}
        options={{ title: 'Product Listing' }}
      />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
};

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{ headerShown: false }}
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

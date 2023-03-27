/**
 * Mixed - Exemple 2
 * Plusieurs types de navigation
 */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProductDetailScreen from '../../../screens/ProductDetailScreen';
import ProductListingScreen from '../../../screens/ProductListingScreen';
import SettingsScreen from '../../../screens/SettingsScreen';
import ProfileScreen from '../../../screens/ProfileScreen';

import { Ionicons, AntDesign } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomePage = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'ProductListing') {
            iconName = 'list';
          } else if (route.name === 'Settings') {
            iconName = 'settings';
          } else if (route.name === 'Profile') {
            return <AntDesign name="user" size={size} color={color} />
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen
        name="ProductListing"
        component={ProductListingScreen}
        options={{ title: 'Product Listing' }}
      />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
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

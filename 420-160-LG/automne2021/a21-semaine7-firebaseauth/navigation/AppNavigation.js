/**
 * Stack - Exemple 1
 * Ajouter deux écrans de navigations.
 */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          options={{ title: 'Se connecter' }}
          component={LoginScreen}
        />
        <Stack.Screen
          name="Register"
          options={{ title: 'Creer un compte' }}
          component={RegisterScreen}
        />
        <Stack.Screen
          name="Home"
          options={{ title: 'Moodle', headerLeft: null }}
          component={HomeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

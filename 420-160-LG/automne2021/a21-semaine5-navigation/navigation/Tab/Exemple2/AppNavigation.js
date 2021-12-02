/**
 * Tab - Exemple 1
 * Ajouter deux écrans de navigations.
 */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../../screens/HomeScreen';
import SettingsScreen from '../../../screens/SettingsScreen';
import LoginScreen from '../../../screens/LoginScreen';

import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons'; 

const Tab = createBottomTabNavigator();

const TabIcon = (props) => {
  if(props.isFeather) {
      return <Feather name={props.name} size={22} color={props.color} />;
  }
  return <Ionicons name={props.name} size={22} color={props.color} />;
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <TabIcon name="ios-information-circle-outline" color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <TabIcon name="ios-list" color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Account"
          component={LoginScreen}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <TabIcon name="user" color={color} isFeather={true} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

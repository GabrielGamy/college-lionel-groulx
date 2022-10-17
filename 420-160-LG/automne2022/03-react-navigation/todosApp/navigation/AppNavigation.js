import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Todos from '../screens/Todos';
import TodoDetail from '../screens/TodoDetail';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#1E90FF'
        },
        headerTintColor: '#fff',
      }}>
        <Stack.Screen name="Todos" component={Todos} />
        <Stack.Screen name="Todo Detail" component={TodoDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

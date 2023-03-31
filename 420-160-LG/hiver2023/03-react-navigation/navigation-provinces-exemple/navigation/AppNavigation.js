import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProvincesScreen from '../screens/ProvincesScreen';
import ProvinceDetailScreen from '../screens/ProvinceDetailScreen';
import VilleScreen from '../screens/VilleScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const HomePage = () => {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#CC0000',
        },
      }}>
      <Drawer.Screen name="Provinces" component={ProvincesScreen} />
    </Drawer.Navigator>
  );
};

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#CC0000',
          },
        }}>
        <Stack.Screen
          name="HomePage"
          component={HomePage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProvinceDetail"
          component={ProvinceDetailScreen}
          options={{ title: 'Information sur la province' }}
        />
        <Stack.Screen name="Ville" component={VilleScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

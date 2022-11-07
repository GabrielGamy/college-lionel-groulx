import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Constants from '../Constants';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Register from '../screens/Register';
import ResetPassword from '../screens/ResetPassword';
import UpdateProfile from '../screens/UpdateProfile';
import VerifyEmail from '../screens/VerifyEmail';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
import { MaterialCommunityIcons } from '@expo/vector-icons';

const screenOptions = {
  headerStyle: {
    backgroundColor: Constants.primary,
  },
  headerTintColor: Constants.textColor,
};

function Moodle() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Profile') {
            iconName = 'account-outline';
          }

          // You can return any component that you like here!
          return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: Constants.primary,
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen options={screenOptions} name="Home" component={Home} />
      <Tab.Screen options={screenOptions} name="Profile" component={UpdateProfile} />
    </Tab.Navigator>
  );
}

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen
          name="Register"
          options={{ title: 'Création du compte' }}
          component={Register}
        />
        <Stack.Screen
          name="Login"
          options={{ title: 'Se connecter', headerLeft: null }}
          component={Login}
        />
        <Stack.Screen
          name="Moodle"
          options={{ title: 'Moodle', headerShown: false }}
          component={Moodle}
        />
        <Stack.Screen
          name="ResetPassword"
          options={{ title: 'Changer le mot de passe' }}
          component={ResetPassword}
        />
        <Stack.Screen
          name="VerifyEmail"
          options={{ title: 'Confirmer le courriel' }}
          component={VerifyEmail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

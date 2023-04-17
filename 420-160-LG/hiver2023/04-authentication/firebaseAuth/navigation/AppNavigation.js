import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";
import HomeScreen from "../screens/HomeScreen";

const Stack = createNativeStackNavigator();

const AppNavigation = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        options={{ title: "Se connecter" }}
        component={LoginScreen}
      />
      <Stack.Screen
        name="Register"
        options={{ title: "Créer un compte" }}
        component={RegisterScreen}
      />
      <Stack.Screen
        name="ForgotPassword"
        options={{ title: "Réinitialiser le mot de passe" }}
        component={ForgotPasswordScreen}
      />
      <Stack.Screen
        name="Home"
        options={{ title: "Moodle", headerBackVisible: false }}
        component={HomeScreen}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigation;

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StateScreen from "../screens/StateScreen";
import StateDetailScreen from "../screens/StateDetailScreen";
import CityScreen from "../screens/CityScreen";
import MapScreen from "../screens/MapScreen";
import constants from "../constants";
import i18n from "../data/languages";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const screenOptions = {
  headerStyle: {
    backgroundColor: constants.primaryColor,
  },
  headerTintColor: "white",
  drawerActiveTintColor: constants.primaryColor,
};

function Home() {
  return (
    <Drawer.Navigator screenOptions={screenOptions}>
      <Drawer.Screen
        name="States"
        component={StateScreen}
        options={{ title: i18n.t("states") }}
      />
    </Drawer.Navigator>
  );
}

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="StateDetail" component={StateDetailScreen} />
        <Stack.Screen name="City" component={CityScreen} />
        <Stack.Screen name="Map" component={MapScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;

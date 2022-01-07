import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Inbox from "../screens/Inbox";
import Inscription from "../screens/Inscription";
import UserContacts from "../screens/UserContacts";
import Discussions from "../screens/Discussions";
import Settings from "../screens/Settings";

import { Feather, Ionicons } from "@expo/vector-icons";
import Constants from "../Constants";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabIcon = (props) => {
  if (props.IsIonicons) {
    return <Ionicons name={props.name} size={props.size} color={props.color} />;
  }
  return <Feather name={props.name} size={props.size} color={props.color} />;
};

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: Constants.primary,
        tabBarInactiveTintColor: "gray",
        headerShown: true,
        headerStyle: {
          backgroundColor: Constants.primary,
        },
        headerTintColor: "#fff",
      })}
    >
      <Tab.Screen
        name="Inbox"
        component={Inbox}
        options={{
          headerTitle: "WeChatApp",
          tabBarIcon: ({ color, size }) => (
            <TabIcon
              name="chatbubbles"
              color={color}
              size={size}
              IsIonicons={true}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Contacts"
        component={UserContacts}
        options={{
          headerTitle: "WeChatApp",
          tabBarIcon: ({ color, size }) => (
            <TabIcon
              name="people-circle"
              color={color}
              size={size}
              IsIonicons={true}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ color, size }) => (
            <TabIcon
              name="settings"
              color={color}
              size={size}
              IsIonicons={true}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({ route }) => ({
          headerStyle: {
            backgroundColor: Constants.primary,
          },
          headerTintColor: "#fff",
        })}
      >
        <Stack.Screen name="Inscription" component={Inscription} />
        <Stack.Screen
          name="Home"
          component={Tabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Discussions" component={Discussions} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

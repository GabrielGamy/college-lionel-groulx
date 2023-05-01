import { StatusBar } from "expo-status-bar";
import Constants from "./Constants";
import AppNavigation from "./navigation/AppNavigation";
import * as Notifications from "expo-notifications";
import { LogBox } from "react-native";

LogBox.ignoreLogs([
  "Calling getExpoPushTokenAsync without specifying a projectId",
]); // Ignore log notification by message

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function App() {
  return (
    <>
      <AppNavigation />
      <StatusBar style="auto" backgroundColor={Constants.primary} />
    </>
  );
}

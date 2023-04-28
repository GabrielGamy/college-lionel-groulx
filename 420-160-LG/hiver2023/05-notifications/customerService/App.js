import { StatusBar } from "expo-status-bar";
import Constants from "./Constants";
import AppNavigation from "./navigation/AppNavigation";
import * as Notifications from "expo-notifications";

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

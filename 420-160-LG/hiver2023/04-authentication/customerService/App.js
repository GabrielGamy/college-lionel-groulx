import { StatusBar } from "expo-status-bar";
import Constants from "./Constants";
import AppNavigation from "./navigation/AppNavigation";

export default function App() {
  return (
    <>
      <AppNavigation />
      <StatusBar style="auto" backgroundColor={Constants.primary} />
    </>
  );
}

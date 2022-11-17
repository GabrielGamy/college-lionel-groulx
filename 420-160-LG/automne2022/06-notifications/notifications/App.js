import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import * as Notifications from 'expo-notifications';
import SendNotificaitons from './notifications/SendNotificaitons';
import AskPermissionsAndSend from './notifications/AskPermissionsAndSend';
import SendInForeground from "./notifications/SendInForeground";
import SendAndHandleResponse from "./notifications/SendAndHandleResponse";

const App = () => {
  return (
    <>
      {/**<SendNotificaitons />*/}
      {/**<AskPermissionsAndSend />*/} 
      {/**<SendInForeground />*/}
      {<SendAndHandleResponse />}
    </>
  );
};

const styles = StyleSheet.create({});

export default App;

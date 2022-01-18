import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import * as Notifications from "expo-notifications";

/**
 * Nous pouvons configuer le comportement lorsque l'application reçoit
 * une notification en mode Foreground.
 */
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

const SendAndHandleResponse = () => {
  useEffect(() => {
    const askPermission = async () => {
      const { status } = await Notifications.requestPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Attention", "Vous ne recevrez pas vos notifications.");
      }
    };
    askPermission();
  }, []);

  useEffect(() => {
    const notificationListener = Notifications.addNotificationReceivedListener(
      (notification) => {
        console.log(
          "Notification Received",
          JSON.stringify(notification, null, 2)
        );
      }
    );

    const responseListener =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log("Notification Response", JSON.stringify(response, null, 2));
      });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener);
      Notifications.removeNotificationSubscription(responseListener);
    };
  }, []);

  const planifierNotification = async () => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Nuveau message 📬",
        body: "Ouvrez l'application pour voir vos nouveaux messages.",
      },
      trigger: { seconds: 5 },
    });
  };

  return (
    <View style={styles.container}>
      <Text style={{ textAlign: "center" }}>
        {"Obtenir les infos de la notification."}
      </Text>
      <TouchableOpacity style={styles.btn} onPress={planifierNotification}>
        <Text style={{ color: "white" }}>{"Planifier la notification"}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "teal",
    padding: 8,
    width: 200,
    borderRadius: 20,
  },
});

export default SendAndHandleResponse;

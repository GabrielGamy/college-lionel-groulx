import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import * as Notifications from 'expo-notifications';

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

const SendInForeground = () => {
  useEffect(() => {
    const askPermission = async () => {
      const { status } = await Notifications.requestPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Attention', 'Vous ne recevrez pas vos notifications.');
      }
    };
    askPermission();
  }, []);

  const planifierNotification = async () => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: 'Nouveau message',
        body: 'Cliquez pour repondre au message.',
      },
      trigger: { seconds: 5 },
    });
  };

  return (
    <View style={styles.container}>
      <Text style={{ textAlign: 'center' }}>
        {"Afficher la notification même lorsque l'applicaiton est en mode Foreground"}
      </Text>
      <TouchableOpacity style={styles.btn} onPress={planifierNotification}>
        <Text style={{ color: 'white' }}>{'Planifier la notification'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'teal',
    padding: 8,
    width: 200,
    borderRadius: 20,
  },
});

export default SendInForeground;

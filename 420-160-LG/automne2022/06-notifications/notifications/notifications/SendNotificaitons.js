import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import * as Notifications from 'expo-notifications';

/**
 * Android & IOS:
 *    - Les notifications ne sont pas affichées par défaut lorsque l'App est en mode Foreground.
 * Android:
 *    - Par défaut, nous avons les permissions pour afficher les notifications sur Android.
 * IOS:
 *    - Sur IOS, il faut demander la permission avant de pouvoir afficher des notifications.
 */
const SendNotificaiton = () => {
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
        {'Envoyer une notification locale'}
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

export default SendNotificaiton;

import React, { useState, useEffect } from 'react';
import { Alert, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import * as Notifications from 'expo-notifications';

// List of hours
const hoursList = [];
for (var hrs = 0; hrs < 24; hrs++) {
  hoursList.push({
    label: hrs < 10 ? `0${hrs}` : hrs,
    value: hrs,
  });
}

// List of minutes
const minutesList = [];
for (var mins = 0; mins < 60; mins++) {
  minutesList.push({ label: mins < 10 ? `0${mins}` : mins, value: mins });
}

export default function ScheduleNotification() {
  const [hourOpen, setHourOpen] = useState(false);
  const [hourValue, setHourValue] = useState(null);
  const [hours, setHours] = useState(hoursList);
  const [minuteOpen, setMinuteOpen] = useState(false);
  const [minuteValue, setMinuteValue] = useState(null);
  const [minutes, setMinutes] = useState(minutesList);

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
      <Text style={styles.paragraph}>
        {"Planifier l'affichage d'une notification locale"}
      </Text>
  
      <View style={styles.dropdownContainer}>
        <DropDownPicker
          style={styles.dropdown}
          open={hourOpen}
          value={hourValue}
          items={hours}
          setOpen={setHourOpen}
          setValue={setHourValue}
          setItems={setHours}
          placeholder="Heures"
          placeholderStyle={styles.placeholderStyles}
          onChangeValue={(value) => setHourValue(value)}
          zIndex={3001}
          zIndexInverse={10000}
        />
        <DropDownPicker
          style={styles.dropdown}
          open={minuteOpen}
          value={minuteValue}
          items={minutes}
          setOpen={setMinuteOpen}
          setValue={setMinuteValue}
          setItems={setMinutes}
          placeholder="Minutes"
          placeholderStyle={styles.placeholderStyles}
          onChangeValue={(value) => setMinuteValue(value)}
          zIndex={3000}
          zIndexInverse={1000}
        />
      </View>

      <TouchableOpacity style={styles.btn} onPress={planifierNotification}>
        <Text style={styles.btnText}>Planifier</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  placeholderStyles: {
    color: 'grey',
  },
  dropdownContainer: {
    marginHorizontal: 10,
    width: '80%',
    marginBottom: 15,
  },
  dropdown: {
    borderColor: '#0057D8',
    height: 50,
    margin: 4,
  },
  btn: {
    padding: 12,
    backgroundColor: '#0057D8',
    minWidth: 150,
    borderRadius: 8,
    zIndex: 2000
  },
  btnText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold'
  }
});

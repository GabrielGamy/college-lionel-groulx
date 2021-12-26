import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import * as Contacts from 'expo-contacts';
import Header from './header';

export default function App() {
  const [contactList, setContactList] = useState([]);
  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync({
          fields: [
            Contacts.Fields.FirstName,
            Contacts.Fields.MiddleName,
            Contacts.Fields.LastName,
            Contacts.Fields.Emails,
            Contacts.Fields.PhoneNumbers,
            Contacts.Fields.Image,
          ],
        });

        setContactList(data);
      }
    })();
  }, []);

  const renderContactItem = ({ item }) => {
    if(!item.phoneNumbers || item.phoneNumbers.length === 0) return null;

    const phoneNumberInfo = item.phoneNumbers[0];
    return (
      <View style={{ marginTop: 16 }}>
        <Text>{item.firstName} {item.lastName}</Text>
        <Text>{phoneNumberInfo.number}</Text>
      </View>
    );
  };

  return (
    <>
      <Header />
      <View style={styles.container}>
        <Text style={{ textAlign: 'center'}}>My Contacts</Text>
        <FlatList
          data={contactList}
          keyExtractor={(item) => item.id}
          renderItem={renderContactItem}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 16,
    flex: 1,
    backgroundColor: '#fff',
  },
});

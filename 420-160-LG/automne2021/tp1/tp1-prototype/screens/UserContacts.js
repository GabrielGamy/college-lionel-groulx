import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import * as Contacts from "expo-contacts";

export default function UserContacts(props) {
  const [contactList, setContactList] = useState([]);
  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === "granted") {
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
    if (!item.phoneNumbers || item.phoneNumbers.length === 0) return null;

    const phoneNumberInfo = item.phoneNumbers[0];
    return (
      <TouchableOpacity
        onPress={() =>
          props.navigation.navigate("Discussions", {
            toUser: item,
          })
        }
        style={{
          marginTop: 16,
          borderBottomWidth: 1,
          borderBottomColor: "gray",
          padding: 4,
        }}
      >
        <Text>
          {item.firstName} {item.lastName}
        </Text>
        <Text>{phoneNumberInfo.number}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Contacts</Text>
      <FlatList
        data={contactList}
        keyExtractor={(item) => item.id}
        renderItem={renderContactItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 16,
    flex: 1,
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: "bold",
  },
});

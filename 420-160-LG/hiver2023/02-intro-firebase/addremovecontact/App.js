/**
 * Exercice 2
 * Ajouter les contacts dans une base de données Firebase (Firebase Firestore)
 */
import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  Alert,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Header from "./components/header";
import Constants from "./constants";
import { getOrCreateUser, updateUser } from "./data/firebase";
import { getData } from "./data/localDatabase";

export default function App() {
  const [currentUser, setCurrentUser] = useState();
  const [contacts, setContacts] = useState([]);
  const [contactFullName, setContactFullName] = useState("");
  const [contactPhoneNumber, setContactPhoneNumber] = useState("");

  useEffect(() => {
    (async () => {
      const userId = await getData("contact_user_id");
      const user = await getOrCreateUser(userId);
      setCurrentUser(user);
      setContacts(user.contacts);
    })();
  }, []);

  saveContacts = async (contacts) => {
    const user = {
      ...currentUser,
      contacts,
    };

    setCurrentUser(user);
    await updateUser(user);
  };

  addContact = () => {
    const randomNumber = Math.floor(Math.random() * 1001);
    const id = `${randomNumber}-${contactPhoneNumber}`;

    const newContact = {
      id,
      contactFullName,
      contactPhoneNumber,
    };

    const newContacts = [newContact, ...contacts];
    setContacts(newContacts);
    saveContacts(newContacts);
  };

  deleteContact = (id) => {
    Alert.alert("Delete contact", "Are you sure?", [
      {
        text: "No",
        onPress: () => {},
      },
      {
        text: "Yes",
        onPress: () => {
          const newContacts = contacts.filter((contact) => contact.id !== id);
          setContacts(newContacts);
          saveContacts(newContacts);
        },
      },
    ]);
  };

  return (
    <>
      <Header />
      <View>
        <Text style={styles.ajouterText}>Ajouter un nouveau contact</Text>
      </View>
      <View>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setContactFullName(text)}
          value={contactFullName}
          placeholder="Saisir le nom complet"
        />
      </View>
      <View>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setContactPhoneNumber(text)}
          value={contactPhoneNumber}
          placeholder="Saisir le numéro du contact"
          keyboardType="numeric"
          textContentType="telephoneNumber"
        />
      </View>
      <View style={styles.addBtn}>
        <Button
          title="Add Contact"
          color={Constants.primary}
          onPress={addContact}
        />
      </View>
      <FlatList
        data={contacts}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={styles.contactitem}
              onPress={() => deleteContact(item.id)}
            >
              <Text style={{ marginBottom: 2, fontSize: 16 }}>
                {item.contactFullName}
              </Text>
              <Text>{item.contactPhoneNumber}</Text>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.id}
      />
    </>
  );
}

const styles = StyleSheet.create({
  ajouterText: {
    paddingTop: 16,
    textAlign: "center",
    fontSize: 18,
    color: Constants.primary,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  addBtn: {
    margin: 12,
  },
  contactitem: {
    padding: 4,
    marginHorizontal: 4,
    marginVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },
});

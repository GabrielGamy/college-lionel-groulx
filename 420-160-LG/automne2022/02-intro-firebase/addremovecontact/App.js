/**
 * Exercice 1
 * Ajouter les contacts dans une base de données Firebase (Firebase Firestore)
 */
import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  FlatList,
  Alert,
  Image,
  TouchableOpacity,
} from "react-native";
import Header from "./components/header";
import Constants from "./constants";

import {
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "./firebase";

export default function App() {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [contactsList, setContactsList] = useState([]);

  useEffect(() => {
    getContacts();
  }, []);

  const addContact = async () => {
    const newContact = {
      fullName,
      phoneNumber,
    };

    try {
      const docRef = await addDoc(collection(db, "contacts"), newContact);
      newContact.id = docRef.id;
      setContactsList([newContact, ...contactsList]);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const getContacts = async () => {
    const results = [];

    const querySnapshot = await getDocs(collection(db, "contacts"));

    querySnapshot.forEach((doc) => {
      const contact = {
        id: doc.id,
        ...doc.data(),
      };
      results.push(contact);
    });

    setContactsList(results);
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.contactItem}>
        <View>
          <Text>{item.fullName}</Text>
          <Text>{item.phoneNumber}</Text>
        </View>
        <TouchableOpacity onPress={() => beforeDelete(item.id)}>
          <Image
            style={styles.removeIcon}
            source={require("./assets/remove.jpeg")}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const beforeDelete = (id) => {
    Alert.alert("Delete", "Are you sure?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Ok",
        style: "ok",
        onPress: () => {
          deleteContact(id);
        },
      },
    ]);
  };

  const deleteContact = async (id) => {
    await deleteDoc(doc(db, "contacts", id));
    const newContactsList = contactsList.filter((c) => c.id !== id);
    setContactsList(newContactsList);
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
          onChangeText={(text) => setFullName(text)}
          value={fullName}
          placeholder="Saisir le nom complet"
        />
      </View>
      <View>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setPhoneNumber(text)}
          value={phoneNumber}
          placeholder="Saisir le numéro du contact"
          keyboardType="numeric"
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
        data={contactsList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.contactList}
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
  contactList: {
    margin: 16,
  },
  contactItem: {
    backgroundColor: "#F8F8FF",
    padding: 16,
    marginBottom: 6,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  removeIcon: {
    width: 20,
    height: 20,
  },
});

/**
 * Exercice 3
 * Permettre la suppression d'un contact dans firebase
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
} from "react-native";
import Header from "./components/Header";
import Constants from "./constants";
import { createContact, getContacts } from "./database/contacts";
import { Ionicons } from "@expo/vector-icons";

export default function App() {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const subscription = getContacts((data) => {
      let results = [];
      Object.keys(data).forEach((item) => {
        results.push(data[item]);
      });
      setContacts(results);
    });

    return () => {
      /**
       * Detacher les callbacks
       * https://firebase.google.com/docs/database/admin/retrieve-data#section-detaching-callbacks
       */
      subscription.off();
    };
  }, []);

  const addContact = () => {
    if (fullName.length === 0) {
      Alert.alert("Erreur", "Le nom du contact est invalide!");
      return;
    }

    const phone = Number(phoneNumber);

    if (phoneNumber.length === 0 || isNaN(phone)) {
      Alert.alert("Erreur", "Le numero du contact est invalide!");
      return;
    }

    createContact(fullName, phoneNumber);

    Alert.alert("Nouveau contact", "Le contact est ajouté dans le repertoire!");
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.contactItem}>
        <View>
          <Ionicons name="person-circle" size={36} color={Constants.primary} />
        </View>
        <View style={{ flexDirection: "column" }}>
          <Text>{item.fullName}</Text>
          <Text>{item.phoneNumber}</Text>
        </View>
      </View>
    );
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
        data={contacts}
        renderItem={renderItem}
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
  contactItem: {
    flexDirection: "row",
    alignItems: "center",
    margin: 8,
    backgroundColor: "#e6e6ff",
    padding: 8,
    borderRadius: 6,
  },
});

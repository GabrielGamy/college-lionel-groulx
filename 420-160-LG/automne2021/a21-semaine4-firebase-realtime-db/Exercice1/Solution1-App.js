/**
 * Exercice 1
 * Ajouter les contacts dans une base de données Firebase (realtime db)
 * Verifier que les contact
 */
import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput, Button, Alert } from "react-native";
import Header from "./components/Header";
import Constants from "./constants";
import { createContact } from "./database/contacts";

export default function App() {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

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
});

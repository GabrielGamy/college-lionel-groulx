/**
 * Exercice 1
 * Ajouter les contacts dans la bd memoire avec asyn-storage
 */
import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput, Button } from "react-native";
import Header from "./components/Header";
import Constants from "./constants";

export default function App() {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

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
          onChangeText={(text) => setPhoneNumber(phoneNumber)}
          value={phoneNumber}
          placeholder="Saisir le numéro du contact"
          keyboardType="numeric"
        />
      </View>
      <View style={styles.addBtn}>
        <Button title="Add Contact" color={Constants.primary} />
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

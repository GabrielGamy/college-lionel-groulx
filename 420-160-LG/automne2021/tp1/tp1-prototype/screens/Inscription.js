import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import { addUser, getCurrentUser } from "../database/users";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Constants from "../Constants";

function Inscription(props) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(async () => {
    const loginInfo = await getCurrentUser();
    if (loginInfo !== null) {
      // We have data!!
      // navigate to the home or any other screen
      props.navigation.navigate("Home");
    }
  }, []);

  const addConctact = () => {
    // verifier que les donnees sont valides
    if (fullName.length === 0 || email.length === 0 || phone.length === 0) {
      Alert.alert("Erreur", "Les informations sont invalides!");
      return;
    }

    // sauvegarder dans firebase
    const user = {
      fullName,
      email,
      phone,
    };
    addUser(user, async () => {
      // Se rappeler de l'utilisateur
      await AsyncStorage.setItem("loginInfo", JSON.stringify(user));
      // naviguer vers l'ecran Home
      props.navigation.navigate("Home");
    });
  };

  return (
    <View style={styles.container}>
      <Text style={{ textAlign: "center", fontWeight: "bold" }}>
        Restez connecté avec vos proches
      </Text>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Nom Complet"
          value={fullName}
          onChangeText={setFullName}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Mot de passe"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirmation"
          secureTextEntry={true}
          value={confirmation}
          onChangeText={setConfirmation}
        />
        <TextInput
          style={styles.input}
          placeholder="Cellulaire"
          keyboardType="numeric"
          value={phone}
          onChangeText={setPhone}
        />
      </View>
      <TouchableOpacity style={styles.btn} onPress={addConctact}>
        <Text style={{ color: "white" }}>Inscription</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 8,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 6,
  },
  btn: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Constants.primary,
    padding: 10,
    margin: 12,
    borderRadius: 6,
  },
});

export default Inscription;

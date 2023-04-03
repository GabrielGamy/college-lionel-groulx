import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Stack, TextInput, Button } from "@react-native-material/core";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Constants from "../Constants";
import { login } from "../services/userService";

export default function Login(props) {
  const navigation = props.navigation;
  const [errorMessage, setErrorMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const authenticate = async () => {
    if (checkEmail(email) && checkPassword(password)) {
      const user = await login(email, password);
      navigation.navigate("Home", {
        user,
      });
    } else {
      setErrorMessage("Email ou Mot de passe incorrect!");
    }
  };

  const checkEmail = (email) => {
    var regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  };

  const checkPassword = (password) => {
    var regex = /\S{5}/;
    return regex.test(password);
  };

  return (
    <Stack spacing={2} style={{ margin: 8 }}>
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require("../assets/snack-icon.png")}
        />
        <View style={{ marginTop: 10 }}>
          <Text style={styles.errorText}>{errorMessage}</Text>
        </View>
      </View>
      <View>
        <TextInput
          label="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          leading={(props) => (
            <MaterialCommunityIcons name="email" {...props} />
          )}
        />
        <TextInput
          label="Mot de passe"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
          leading={(props) => (
            <MaterialCommunityIcons name="form-textbox-password" {...props} />
          )}
        />
        <Button
          title="Me connecter"
          color={Constants.primary}
          tintColor={Constants.textColor}
          onPress={authenticate}
        />
        <View style={styles.actionBox}>
          <Text>{"Vous n'avez pas un compte ?"}</Text>
          <TouchableOpacity>
            <Text style={styles.actionBtn}>{"Créer mon compte"}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.actionBox}>
          <Text>{"Vous avez oublié votre mot de passe?"}</Text>
          <TouchableOpacity>
            <Text style={styles.actionBtn}>
              {"Réinitialiser le mot de passe"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Stack>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  logo: {
    height: 80,
    width: 80,
  },
  actionBox: {
    marginTop: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  actionBtn: {
    color: Constants.primary,
    fontSize: 16,
  },
  errorText: {
    color: "red",
    textTransform: "uppercase",
    textAlign: "center",
  },
});

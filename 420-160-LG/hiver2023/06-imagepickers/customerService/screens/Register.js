import React, { useState } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { Stack, TextInput, Button } from "@react-native-material/core";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Constants from "../Constants";
import { signup } from "../services/userService";

export default function Register(props) {
  const [errorMessage, setErrorMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const signUpUser = async () => {
    if (password !== confirmPassword) {
      setErrorMessage("Les mots de passe ne sont pas identiques.");
      return;
    }

    const response = await signup(email, password);

    if (response.errorMessage) {
      setErrorMessage(response.errorMessage);
      return;
    }

    props.navigation.navigate("Login");
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
        <TextInput
          label="Confirmation mot de passe"
          secureTextEntry
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
          leading={(props) => (
            <MaterialCommunityIcons name="form-textbox-password" {...props} />
          )}
        />
        <Button
          title="M'inscrire"
          color={Constants.primary}
          tintColor={Constants.textColor}
          onPress={signUpUser}
        />
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

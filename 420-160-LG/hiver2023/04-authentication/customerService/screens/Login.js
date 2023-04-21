import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Stack, TextInput, Button } from "@react-native-material/core";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Constants from "../Constants";
import { getUserData, isConnected, signin } from "../services/userService";
import { createUserData } from "../data/userData";

export default function Login(props) {
  const [errorMessage, setErrorMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(function () {
    const checkIsAuthenticated = async function () {
      const userConnectedInfo = await isConnected();
      if (userConnectedInfo) {
        navigate(userConnectedInfo.token, userConnectedInfo.email);
        return;
      }
    };

    checkIsAuthenticated();
  }, []);

  const authenticate = async () => {
    const response = await signin(email, password);

    if (response.errorMessage) {
      setErrorMessage(response.errorMessage);
      return;
    }

    navigate(response?.data?.idToken, response?.data?.email);
  };

  const navigate = async (token, email) => {
    const userData = await getUserData(token);
    if (userData?.data?.users[0]?.emailVerified) {
      const user = await createUserData(email);
      props.navigation.navigate("Home", {
        user,
      });
    } else {
      props.navigation.navigate("VerifyEmail", {
        token,
      });
    }
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
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Register")}
          >
            <Text style={styles.actionBtn}>{"Créer mon compte"}</Text>
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

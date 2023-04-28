import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Stack, TextInput, Button } from "@react-native-material/core";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Constants from "../Constants";
import { getUserData, isConnected, signin } from "../services/userService";
import { createUserMetadata } from "../data/userData";

export default function Login(props) {
  const [errorMessage, setErrorMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [expoPushToken, setExpoPushToken] = useState("");

  useEffect(() => {
    registerForPushNotificationsAsync().then((token) =>
      setExpoPushToken(token)
    );
  }, []);

  useEffect(function () {
    const checkIsAuthenticated = async function () {
      const userConnectedInfo = await isConnected();
      if (userConnectedInfo) {
        navigate(userConnectedInfo.token);
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

    navigate(response?.data?.idToken);
  };

  const navigate = async (token) => {
    const userData = await getUserData(token);
    const metadata = userData?.data?.users[0];

    if (metadata?.emailVerified) {
      metadata.pushToken = "";
      const user = await createUserMetadata(metadata);
      props.navigation.navigate("Home", { user });
    } else {
      props.navigation.navigate("VerifyEmail", { token });
    }
  };

  const registerForPushNotificationsAsync = async () => {
    let token = "";

    if (Platform.OS === "android") {
      await Notifications.setNotificationChannelAsync("default", {
        name: "default",
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: "#FF231F7C",
      });
    }

    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      alert("Failed to get push token for push notification!");
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);

    return token;
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
          onChangeText={(text) => setEmail(text.trim())}
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

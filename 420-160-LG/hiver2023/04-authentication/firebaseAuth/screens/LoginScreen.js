import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import FormInput from "../components/FormInput";
import Constants from "../constants";
import { isConnected, signin } from "../services/UserService";

const LoginScreen = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(function () {
    const checkIsAuthenticated = async function () {
      const isUserConnected = await isConnected();
      if (isUserConnected) {
        props.navigation.navigate("Home");
        return;
      }
    };

    checkIsAuthenticated();
  }, []);

  const loginUser = async () => {
    const response = await signin(email, password);

    if (response.errorMessage) {
      setErrorMessage(response.errorMessage);
      return;
    }

    console.log("response", JSON.stringify(response, null, 2));

    props.navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <View style={styles.loginForm}>
        <Text style={{ textAlign: "center" }}>
          {"Connectez-vous pour accéder au compte"}
        </Text>

        {errorMessage.length > 0 && (
          <Text style={styles.errorMessage}>{errorMessage}</Text>
        )}

        <View style={styles.loginFormView}>
          <FormInput
            label="Email:"
            type={"email"}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />

          <FormInput
            label="Mot de passe:"
            isSecure={true}
            type={"password"}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />

          <View style={styles.loginBtnContainer}>
            <TouchableOpacity
              style={styles.loginBtn}
              onPress={() => loginUser()}
            >
              <Text style={styles.loginBtnText}>Se connecter</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.loginAction}>
            <Text>{"Vous n'avez pas de compte ?"}</Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Register")}
            >
              <Text style={styles.loginActionBtn}>{"Créer un compte"}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.loginAction}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("ForgotPassword")}
            >
              <Text style={styles.loginActionBtn}>
                {"Mot de passe oublié ?"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 8,
  },
  loginForm: {
    justifyContent: "center",
  },
  loginFormView: {
    backgroundColor: "white",
    marginVertical: 16,
    marginHorizontal: 8,
    padding: 4,
    minHeight: 200,
    justifyContent: "center",
    borderRadius: 10,
  },
  loginAction: {
    marginTop: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  loginActionBtn: {
    color: Constants.primary,
    fontSize: 16,
  },
  loginBtnContainer: {
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
  },
  loginBtn: {
    backgroundColor: Constants.primary,
    padding: 10,
    borderRadius: 6,
    maxWidth: 140,
    justifyContent: "center",
  },
  loginBtnText: {
    color: Constants.textColor,
    textAlign: "center",
    fontSize: 16,
  },
  errorMessage: {
    margin: 6,
    textAlign: "center",
    color: "red",
    fontSize: 16,
  },
});

export default LoginScreen;

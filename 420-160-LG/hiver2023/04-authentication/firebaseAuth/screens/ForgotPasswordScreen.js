import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import FormInput from "../components/FormInput";
import Constants from "../constants";
import { sendForgotPassword } from "../services/UserService";

const ForgotPasswordScreen = (props) => {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const sendForgotPasswordEmail = async () => {
    const response = await sendForgotPassword(email);

    if (response.errorMessage) {
      setErrorMessage(response.errorMessage);
      return;
    }

    props.navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <View style={styles.forgotForm}>
        <Text style={{ textAlign: "center" }}>
          {"Saisisez vos informations"}
        </Text>

        {errorMessage.length > 0 && (
          <Text style={styles.errorMessage}>{errorMessage}</Text>
        )}

        <View style={styles.forgotFormView}>
          <FormInput
            label="Email:"
            type={"email"}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />

          <View style={styles.forgotBtnContainer}>
            <TouchableOpacity
              style={styles.forgotBtn}
              onPress={() => sendForgotPasswordEmail()}
            >
              <Text style={styles.forgotBtnText}>{"Soumettre"}</Text>
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
  forgotForm: {
    justifyContent: "center",
  },
  forgotFormView: {
    backgroundColor: "white",
    marginVertical: 16,
    marginHorizontal: 8,
    padding: 4,
    minHeight: 200,
    justifyContent: "center",
    borderRadius: 10,
  },
  forgotBtnContainer: {
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
  },
  forgotBtn: {
    backgroundColor: Constants.primary,
    padding: 10,
    borderRadius: 6,
    maxWidth: 140,
    justifyContent: "center",
  },
  forgotBtnText: {
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

export default ForgotPasswordScreen;

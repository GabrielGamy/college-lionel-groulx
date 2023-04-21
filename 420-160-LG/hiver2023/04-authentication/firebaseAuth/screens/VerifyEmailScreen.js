import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import FormInput from "../components/FormInput";
import Constants from "../constants";
import { sendVerifyEmail } from "../services/UserService";

const VerifyEmailScreen = (props) => {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { token } = props.route.params;

  const sendVerificationEmail = async () => {
    const response = await sendVerifyEmail(email, token);

    if (response.errorMessage) {
      setErrorMessage(response.errorMessage);
      return;
    }

    props.navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <View style={styles.verifyForm}>
        <Text style={{ textAlign: "center" }}>
          {
            "Saisisez votre adresse courriel. Vous recevrez un mail de confirmation."
          }
        </Text>

        {errorMessage.length > 0 && (
          <Text style={styles.errorMessage}>{errorMessage}</Text>
        )}

        <View style={styles.verifyFormView}>
          <FormInput
            label="Email:"
            type={"email"}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />

          <View style={styles.verifyBtnContainer}>
            <TouchableOpacity
              style={styles.verifyBtn}
              onPress={() => sendVerificationEmail()}
            >
              <Text style={styles.verifyBtnText}>{"Soumettre"}</Text>
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
  verifyForm: {
    justifyContent: "center",
  },
  verifyFormView: {
    backgroundColor: "white",
    marginVertical: 16,
    marginHorizontal: 8,
    padding: 4,
    minHeight: 200,
    justifyContent: "center",
    borderRadius: 10,
  },
  verifyBtnContainer: {
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
  },
  verifyBtn: {
    backgroundColor: Constants.primary,
    padding: 10,
    borderRadius: 6,
    maxWidth: 140,
    justifyContent: "center",
  },
  verifyBtnText: {
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

export default VerifyEmailScreen;

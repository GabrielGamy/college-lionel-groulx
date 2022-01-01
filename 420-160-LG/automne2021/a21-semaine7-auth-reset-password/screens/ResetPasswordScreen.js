import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import FormInput from '../components/formInput';
import Constants from '../constants';
import { sendPasswordResetEmail, getCommonError } from '../services/userService';

function ResetPasswordScreen(props) {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const resetPassword = () => {
    sendPasswordResetEmail(email, async (response) => {
      if (response.error) {
        const message = getCommonError(response.error.message);
        setErrorMessage(message);
      } else {
        props.navigation.navigate('Login');
      }
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.loginForm}>
        <Text style={{ textAlign: 'center' }}>
          {'Entrez votre email pour obtenir le courriel de modification du mot de passe'}
        </Text>

        {errorMessage.length > 0 && (
          <Text style={styles.errorMessage}>{errorMessage}</Text>
        )}

        <View style={styles.modalView}>
          <FormInput
            label="Email:"
            type={'email'}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />

          <View style={styles.logoutBtnContainer}>
            <TouchableOpacity
              style={styles.loginBtn}
              onPress={() => resetPassword()}>
              <Text style={styles.loginBtnText}>Envoyer</Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 8,
  },
  loginForm: {
    justifyContent: 'center',
  },
  modalView: {
    backgroundColor: 'white',
    marginVertical: 16,
    marginHorizontal: 8,
    padding: 4,
    minHeight: 200,
    justifyContent: 'center',
    borderRadius: 10,
  },
  logoutBtnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
  },
  loginBtn: {
    backgroundColor: Constants.primary,
    padding: 10,
    borderRadius: 6,
    maxWidth: 140,
    justifyContent: 'center',
  },
  loginBtnText: {
    color: Constants.textColor,
    textAlign: 'center',
    fontSize: 16,
  },
  errorMessage: {
    margin: 6,
    textAlign: 'center',
    color: 'red',
    fontSize: 16,
  },
});

export default ResetPasswordScreen;

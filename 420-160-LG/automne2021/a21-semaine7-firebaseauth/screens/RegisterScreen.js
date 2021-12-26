import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { isUserConnected } from '../services/userService';
import FormInput from '../components/formInput';
import Constants from '../constants';
import { signUp, getCommonError } from '../services/userService';

function RegisterScreen(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const checkUserIsConnected = async () => {
      let isConnected = await isUserConnected();
      if (isConnected) {
        props.navigation.navigate('Home');
      }
    };
    checkUserIsConnected();
  }, [props]);

  const signUpUser = () => {
    if (password !== confirmPassword) {
      setErrorMessage('Les mots de passe de sont pas identiques.');
      return;
    }

    if (password.length < 4) {
      setErrorMessage('Le mot de passe est trop court.');
      return;
    }

    signUp(email, password, async (response) => {
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
      <View style={styles.registerForm}>
        <Text style={{ textAlign: 'center' }}>
          {'Saisisez vos informations'}
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

          <FormInput
            label="Mot de passe:"
            isSecure={true}
            type={'password'}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />

          <FormInput
            label="Confirmation mot de passe:"
            isSecure={true}
            type={'password'}
            value={confirmPassword}
            onChangeText={(text) => setConfirmPassword(text)}
          />

          <View style={styles.registerBtnContainer}>
            <TouchableOpacity
              style={styles.registerBtn}
              onPress={() => signUpUser()}>
              <Text style={styles.registerBtnText}>Se connecter</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.loginAccount}>
            <Text>{'Vous avez déjà un compte ?'}</Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Login')}>
              <Text style={styles.loginAccountBtn}>{'Connectez-vous'}</Text>
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
  registerForm: {
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
  loginAccount: {
    marginTop: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginAccountBtn: {
    color: Constants.primary,
    fontSize: 16,
  },
  registerBtnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
  },
  registerBtn: {
    backgroundColor: Constants.primary,
    padding: 10,
    borderRadius: 6,
    maxWidth: 140,
    justifyContent: 'center',
  },
  registerBtnText: {
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

export default RegisterScreen;

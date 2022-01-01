import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { isUserConnected } from '../services/userService';
import FormInput from '../components/formInput';
import Constants from '../constants';
import { login, saveUserInfo, getCommonError } from '../services/userService';

function LoginScreen(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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

  const loginUser = () => {
    login(email, password, async (response) => {
      if (response.error) {
        const message = getCommonError(response.error.message);
        setErrorMessage(message);
      } else {
        //alert(JSON.stringify(response.data, null, 2));
        await saveUserInfo(response.data);
        props.navigation.navigate('Home');
      }
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.loginForm}>
        <Text style={{ textAlign: 'center' }}>
          {'Connectez-vous pour accéder au compte'}
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

          <View style={styles.logoutBtnContainer}>
            <TouchableOpacity
              style={styles.loginBtn}
              onPress={() => loginUser()}>
              <Text style={styles.loginBtnText}>Se connecter</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.createAccount}>
            <Text>{"Vous n'avez pas de compte ?"}</Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Register')}>
              <Text style={styles.actionBtn}>{'Créer un compte'}</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.forgotPassword}
            onPress={() => props.navigation.navigate('ResetPassword')}>
            <Text style={styles.actionBtn}>{'Mot de passe oublié ?'}</Text>
          </TouchableOpacity>
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
  createAccount: {
    marginTop: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionBtn: {
    color: Constants.primary,
    fontSize: 16,
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
  forgotPassword: {
    marginTop: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoginScreen;

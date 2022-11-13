import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Stack, TextInput, Button } from '@react-native-material/core';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Constants from '../Constants';
import {
  isAuthenticated,
  signUp,
  updateProfile,
  getCommonError,
} from '../services/userService';

export default function Register({ navigation }) {
  const [firstName, setFirsName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmation, setConfirmation] = useState();
  const [errorMessage, setErrorMessage] = useState();

  useEffect(() => {
    (async () => {
      const isUserAuthenticated = await isAuthenticated();
      if (isUserAuthenticated) {
        navigation.navigate('Moodle');
      }
    })();
  }, []);

  const createAccount = async () => {
    if (validateName() && validateEmail() && validatePassword()) {
      setErrorMessage('');
      var response = await signUp(email, password);

      if (response.success) {
        const displayName = `${firstName} ${lastName}`;
        await updateProfile(displayName, response.idToken);
        navigation.navigate('Login');
      } else {
        var message = getCommonError(response?.error?.message);
        setErrorMessage(message);
      }
    }
  };

  const validateName = () => {
    if (!firstName || firstName.length < 2) {
      setErrorMessage('Le prénom doit contenir au moins deux caractères.');
      return false;
    }

    if (!lastName || lastName.length < 2) {
      setErrorMessage('Le nom doit contenir au moins deux caractères.');
      return false;
    }
    return true;
  };

  const validateEmail = () => {
    if (!email || email.length < 1) {
      setErrorMessage('Courriel invalide');
      return false;
    }
    return true;
  };

  const validatePassword = () => {
    if (password !== confirmation) {
      setErrorMessage('Les mots de passe ne sont pas identiques.');
      return false;
    }

    if (!password || password.length < 6) {
      setErrorMessage('Le mot de passe est trop court.');
      return false;
    }
    return true;
  };

  return (
    <Stack spacing={2} style={{ margin: 10 }}>
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('../assets/snack-icon.png')}
        />
        <View style={{ marginTop: 10 }}>
          <Text style={styles.errorText}>{errorMessage}</Text>
        </View>
      </View>
      <View>
        <TextInput
          label="Prénom"
          value={firstName}
          onChangeText={(text) => setFirsName(text)}
          leading={(props) => (
            <MaterialCommunityIcons name="account" {...props} />
          )}
        />
        <TextInput
          label="Nom"
          value={lastName}
          onChangeText={(text) => setLastName(text)}
          leading={(props) => (
            <MaterialCommunityIcons name="account" {...props} />
          )}
        />
        <TextInput
          label="Courriel"
          value={email}
          onChangeText={(text) => setEmail(text)}
          leading={(props) => (
            <MaterialCommunityIcons name="email" {...props} />
          )}
        />
        <TextInput
          label="Mot de passe"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
          leading={(props) => (
            <MaterialCommunityIcons name="form-textbox-password" {...props} />
          )}
        />
        <TextInput
          label="Confirmation"
          value={confirmation}
          onChangeText={(text) => setConfirmation(text)}
          secureTextEntry
          leading={(props) => (
            <MaterialCommunityIcons name="form-textbox-password" {...props} />
          )}
        />
        <Button
          title="Créer mon compte"
          color={Constants.primary}
          tintColor={Constants.textColor}
          onPress={() => createAccount()}
        />
        <View style={styles.actionBox}>
          <Text>{'Vous avez un compte ?'}</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.actionBtn}>{'Connectez-vous'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Stack>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  logo: {
    height: 80,
    width: 80,
  },
  actionBox: {
    marginTop: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionBtn: {
    color: Constants.primary,
    fontSize: 16,
  },
  errorText: {
    color: 'red',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
});

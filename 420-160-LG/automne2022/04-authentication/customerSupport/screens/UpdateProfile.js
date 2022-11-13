import React, { useState, useEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { Text, View, StyleSheet, Image, Alert } from 'react-native';
import { Stack, TextInput, Button } from '@react-native-material/core';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Constants from '../Constants';
import { clearData } from '../services/userService';

import {
  getProfile,
  updateProfile,
  getData,
  sendEmailVerification,
} from '../services/userService';

export default function UpdateProfile({ navigation }) {
  const [displayName, setDisplayName] = useState();
  const [email, setEmail] = useState();
  const [idToken, setIdToken] = useState();
  const [emailVerified, setEmailVerified] = useState(false);

  useFocusEffect(() => {
    const getUserData = async () => {
      const tokenData = await getData();
      if (tokenData && tokenData.idToken) {
        const userProfile = await getProfile(tokenData.idToken);
        if (!checkSessionExpired(userProfile)) {
          setDisplayName(userProfile.users[0].displayName);
          setEmail(userProfile.users[0].email);
          setEmailVerified(userProfile.users[0].emailVerified);
          setIdToken(tokenData.idToken);
        }
      }
    };

    getUserData();
  }, []);

  const logout = async () => {
    await clearData();
    navigation.navigate('Login');
  };

  const checkSessionExpired = (response) => {
    if (
      response &&
      response.success === false &&
      response.error?.message === 'INVALID_ID_TOKEN'
    ) {
      logout();
      return true;
    }
    return false;
  };

  const updateAccount = async () => {
    if (displayName && displayName.length >= 2) {
      await updateProfile(displayName, idToken);
      Alert.alert(
        'Modification du profil',
        'Votre profil est modifié avec succès!'
      );
    }
  };

  const verifyUserEmail = async () => {
    const response = await sendEmailVerification(idToken);
    if (response.success) {
      Alert.alert(
        'Verification du courriel',
        'Cliquez sur le lien que vous recevrez dans votre courriel.'
      );
    }
  };

  return (
    <Stack spacing={2} style={{ margin: 8 }}>
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('../assets/snack-icon.png')}
        />
        <Text style={styles.paragraph}>Information du Profil</Text>
      </View>
      <View>
        <TextInput
          value={displayName}
          onChangeText={(text) => setDisplayName(text)}
          leading={(props) => (
            <MaterialCommunityIcons name="account" {...props} />
          )}
        />
        <TextInput
          value={email}
          onChangeText={(text) => setEmail(text)}
          editable={false}
          leading={(props) => (
            <MaterialCommunityIcons name="email" {...props} />
          )}
        />
        <Button
          title="Sauvegarder"
          color={Constants.primary}
          tintColor={Constants.textColor}
          onPress={updateAccount}
        />
      </View>
      {emailVerified === false && (
        <View style={{ margin: 16 }}>
          <Text>Voulez-vous confirmer votre adresse courriel?</Text>
          <Button
            title="Confirmer"
            color={Constants.primary}
            tintColor={Constants.textColor}
            onPress={verifyUserEmail}
          />
        </View>
      )}
      <View style={{ marginTop: 32 }}>
        <Button
          variant="outlined"
          title="Deconnexion"
          color={Constants.primary}
          onPress={logout}
        />
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
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 80,
    width: 80,
  },
});

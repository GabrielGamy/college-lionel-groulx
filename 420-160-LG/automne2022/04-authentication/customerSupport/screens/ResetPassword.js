import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, Alert } from 'react-native';
import { Stack, TextInput, Button } from '@react-native-material/core';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { sendResetPasswordEmail } from '../services/userService';
import Constants from '../Constants';

export default function ResetPassword() {
  const [email, setEmail] = useState();

  const sendResetEmail = async () => {
    if (email && email.length) {
      const response = await sendResetPasswordEmail(email);
      Alert.alert(
        'Modification du mot de passe',
        'Vous recevrez dans votre courriel un lien pour changer le mot de passe.'
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
        <Text style={styles.paragraph}>Modifier votre mot de passe</Text>
      </View>
      <View>
        <TextInput
          label="Courriel"
          value={email}
          onChangeText={(text) => setEmail(text)}
          leading={(props) => (
            <MaterialCommunityIcons name="email" {...props} />
          )}
        />
        <Button
          title="Enovyer courriel"
          color={Constants.primary}
          tintColor={Constants.textColor}
          onPress={sendResetEmail}
        />
      </View>
    </Stack>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
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

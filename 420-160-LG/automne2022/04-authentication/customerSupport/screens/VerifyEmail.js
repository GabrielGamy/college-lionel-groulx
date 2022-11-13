import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, Alert } from 'react-native';
import { Stack, TextInput, Button } from '@react-native-material/core';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Constants from '../Constants';

export default function VerifyEmail({ navigation }) {
  const [code, setCode] = useState();

  const verifyCode = () => {
    const isValid = false;
    if (isValid) {
      Alert.alert('Verification du courriel', 'Votre code est valide. Merci!', [
        {
          text: 'Ok',
          onPress: () => {
            navigation.goBack();
          }
        }
      ]);
    } else {
      Alert.alert('Verification du courriel', "Le code n'est pas valide.");
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/snack-icon.png')} />
      <Text style={styles.paragraph}>
        Entrez le code que vous recevrez dans votre courriel.
      </Text>
      <Stack spacing={2} style={{ marginVertical: 8 }}>
        <TextInput
          label="Code"
          value={code}
          onChangeText={(text) => setCode(text)}
          leading={(props) => (
            <MaterialCommunityIcons name="email" {...props} />
          )}
        />
        <Button
          title="Verifier"
          color={Constants.primary}
          tintColor={Constants.textColor}
          onPress={verifyCode}
        />
      </Stack>
    </View>
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

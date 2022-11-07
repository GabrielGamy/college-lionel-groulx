import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Stack, Button } from '@react-native-material/core';
import Constants from '../Constants';
import { clearData } from "../services/userService";

export default function Home({ navigation }) {
  const logout =  async () => {
    await clearData();
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/snack-icon.png')} />
      <Text style={styles.paragraph}>Bonjour!</Text>
      <Stack spacing={4}>
        <Button
          variant="outlined"
          title="Deconnexion"
          color={Constants.primary}
          onPress={logout}
        />
      </Stack>
    </View>
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

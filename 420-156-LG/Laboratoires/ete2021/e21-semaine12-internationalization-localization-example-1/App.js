/**
 * Programmation d'applications mobiles 1 - Collège Lionel-Groulx 
 * Techniques d'internationalisation
 */
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Languages from './languages';

export default function App() {
  const lang = Languages["fr"];
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>{lang["hello"]}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center"
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

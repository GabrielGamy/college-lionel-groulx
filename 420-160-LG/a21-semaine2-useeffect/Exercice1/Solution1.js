/**
 * Exercice 1
 * Transformer les composant CustomButton et App en fonctoin
 */
import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';

const CustomButton = () => {
  useEffect(() => {
    alert('render custon button');
    return () => {
      alert('destroying custon button');
    };
  }, []);

  return <Button title="Custom button" />;
};

export default function App() {
  const [show, setShow] = useState(true);

  const toogleButton = () => {
    setShow((show) => !show);
  };

  return (
    <View style={styles.container}>
      <View style={styles.paragraph}>
        <Button
          title="Show / Hide custom button"
          color="orange"
          onPress={toogleButton}
        />
      </View>
      {show && <CustomButton />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
  },
});

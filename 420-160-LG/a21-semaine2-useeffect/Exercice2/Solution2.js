/**
 * Exercice 2
 * Transformer les composant CustomTimer et App en fonctoin
 */
import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';

function CustomTimer() {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    console.log('render custon timer');

    const timerListener = setInterval(() => {
      console.log('timer ....');
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);

    return () => {
      console.log('destroying custon timer');
      clearInterval(timerListener);
    };
  }, []);

  return <Text style={{ fontSize: 20, textAlign: 'center' }}>{timer}</Text>;
}


export default function App() {
  const [show, setShow] = useState(true);

  const toogleButton = () => {
    setShow((show) => !show);
  };

  return (
    <View style={styles.container}>
      <View style={styles.paragraph}>
        <Button
          title="Show / Hide custom timer"
          color="orange"
          onPress={toogleButton}
        />
      </View>
      {show && <CustomTimer />}
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

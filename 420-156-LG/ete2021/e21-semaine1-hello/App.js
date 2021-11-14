/**
 * Programmation d'applications mobiles 1 - Collège Lionel-Groulx
 * Introduction à React et React native
 * Passage des paramètres avec Props
 * Ecouter les événements dans une zone de texte avec TextInput 
 */
import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Hello from './components/Hello';

export default class App extends React.Component {
  state = {
    who: 'La classe',
    other: 'Gabriel',
  };

  doSomething = (theValue) => {
    this.setState({ who: theValue });
  };

  render() {
    return (
      <View style={styles.container}>
        <Hello who={this.state.who} other={this.state.other} />
        <TextInput
          style={styles.input}
          placeholder="Bonjour qui ?"
          onChangeText={this.doSomething}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    width: 200,
  },
});

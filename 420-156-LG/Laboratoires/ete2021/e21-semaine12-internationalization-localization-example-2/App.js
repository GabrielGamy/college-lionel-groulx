/**
 * Programmation d'applications mobiles 1 - Collège Lionel-Groulx
 * Techniques d'internationalisation
 */
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import { fr, en } from './languages';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    i18n.fallbacks = true;
    i18n.translations = { fr, en };
    i18n.locale = Localization.locale;
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>{i18n.t('hello')}</Text>
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
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

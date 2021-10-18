/**
 * Programmation d'applications mobiles 1 - Collège Lionel-Groulx
 */
import * as React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

/**
 * Exercice 6
 * - Utiliser ComponentDidMount pour obtenir les données d'une API.
 * - Utiliser ComponentDidUpdate pour obtenir les nouvelles données en fonction du state
 */

export default class App extends React.Component {
  state = {
    currentIndex: 0,
    currentApi: {}
  }

  componentDidMount() {
    this.loadItems();
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.currentIndex !== this.state.currentIndex) {
      this.loadItems();
    }
  }

  componentDidCatch() {}

  componentWillUnmount() {
    // Clean up du composant
  }

  loadItems = () => {
    const { currentIndex } = this.state;
    fetch('https://api.publicapis.org/entries', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((result) => {
        this.setState({ currentApi: result.entries[currentIndex]});
      });
  };

  goToNext = () => {
    const currentIndex = this.state.currentIndex;
    this.setState({ currentIndex: currentIndex + 1 });
  }

  render() {
    const { currentApi } = this.state;
    return (
      <View style={styles.container}>
        <Text>API: {currentApi.API} </Text>
        <Text>Description: {currentApi.Description} </Text>
        <Text>Category: {currentApi.Category} </Text>
        <Text>Url: {currentApi.Link} </Text>
        <Button title="Next Item" onPress={this.goToNext} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
  },
});

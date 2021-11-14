/**
 * Exercice 1
 * Transformer les composant CustomButton et App en fonctoin
 */
import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';

class CustomButton extends React.Component {
  componentDidMount() {
    console.log("render custon button");
  }

  componentWillUnmount() {
    console.log("destroying custon button");
  }

  render() {
    return <Button title="Custom button" />;
  }
}

export default class App extends React.Component {
  state = {
    show: true,
  };

  toogleButton = () => {
    const showButton = this.state.show;
    this.setState({ show: !showButton });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.paragraph}>
          <Button
            title="Show / Hide custom button"
            color="orange"
            onPress={this.toogleButton}
          />
        </View>
        {this.state.show && <CustomButton />}
      </View>
    );
  }
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

/**
 * Exercice 2
 * Transformer les composant CustomTimer et App en fonctoin
 */
import * as React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import Constants from "expo-constants";

class CustomTimer extends React.Component {
  state = {
    timer: 0,
  };

  componentDidMount() {
    console.log("render custon timer");
    this.timerListener = setInterval(() => {
      console.log("timer ....");
      this.setState((prevState) => {
        return {
          timer: prevState.timer + 1,
        };
      });
    }, 1000);
  }

  componentWillUnmount() {
    console.log("destroying custon timer");
    clearInterval(this.timerListener);
  }

  render() {
    return (
      <Text style={{ fontSize: 20, textAlign: "center" }}>
        {this.state.timer}
      </Text>
    );
  }
}

export default class App extends React.Component {
  state = {
    show: true,
  };

  toogleButton = () => {
    const showButton = this.state.show;
    this.setState({ show: !showButton });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.paragraph}>
          <Button
            title="Show / Hide custom timer"
            color="orange"
            onPress={this.toogleButton}
          />
        </View>
        {this.state.show && <CustomTimer />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
  },
});

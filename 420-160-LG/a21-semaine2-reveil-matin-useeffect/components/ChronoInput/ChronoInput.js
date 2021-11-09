import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Dimensions,
} from "react-native";

export class ChronoInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showInputs: false,
    };
  }

  valider = () => {
    this.setState({ showInputs: false });
  };

  setShowInput = () => this.setState({ showInputs: true });

  setMinutes = (text) => {
    this.props.onSetMinutes(text);
  };

  setSeconds = (text) => {
    this.props.onSetSeconds(text);
  };

  render() {
    return (
      <View style={styles.chrono}>
        {this.state.showInputs && (
          <View>
            <View>
              <Text>Minutes :</Text>
              <TextInput
                style={styles.input}
                keyboardType="numeric"
                placeholder="saisir la minute"
                onChangeText={this.setMinutes}
              />
            </View>
            <View>
              <Text>Seconds :</Text>
              <TextInput
                style={styles.input}
                keyboardType="numeric"
                placeholder="saisir la seconde"
                onChangeText={this.setSeconds}
              />
            </View>
            <Button title="Valider" onPress={this.valider} />
          </View>
        )}
        <Text style={styles.chronoText} onPress={this.setShowInput}>
          {this.props.minutes}:{this.props.seconds}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  chrono: {
    marginTop: 32,
    justifyContent: "center",
    alignItems: "center",
  },
  chronoText: {
    fontSize: 36,
  },
  input: {
    height: 40,
    width: Dimensions.get("window").width / 2,
    marginVertical: 12,
    borderWidth: 1,
    padding: 10,
  },
});

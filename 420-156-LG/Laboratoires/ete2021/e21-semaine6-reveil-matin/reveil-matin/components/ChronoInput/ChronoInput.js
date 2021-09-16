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
      hours: "00",
      minutes: "00",
    };
  }

  valider = () => {
    this.setState({ showInputs: false });
  };

  setShowInput = () => this.setState({ showInputs: true });

  render() {
    return (
      <View style={styles.chrono}>
        {this.state.showInputs && (
          <View>
            <View>
              <Text>Heure :</Text>
              <TextInput
                style={styles.input}
                keyboardType="numeric"
                placeholder="saisir l'heure"
              />
            </View>
            <View>
              <Text>Minutes :</Text>
              <TextInput
                style={styles.input}
                keyboardType="numeric"
                placeholder="saisir la minute"
              />
            </View>
            <Button title="Valider" onPress={this.valider} />
          </View>
        )}
        <Text style={styles.chronoText} onPress={this.setShowInput}>
          {this.state.hours}:{this.state.minutes}
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

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

  setHours = (text) => {
    this.props.onSetHours(text);
  };

  setMinutes = (text) => {
    this.props.onSetMinutes(text);
  };

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
                onChangeText={this.setHours}
              />
            </View>
            <View>
              <Text>Minutes :</Text>
              <TextInput
                style={styles.input}
                keyboardType="numeric"
                placeholder="saisir la minute"
                onChangeText={this.setMinutes}
              />
            </View>
            <Button title="Valider" onPress={this.valider} />
          </View>
        )}
        <Text style={styles.chronoText} onPress={this.setShowInput}>
          {this.props.hours}:{this.props.minutes}
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

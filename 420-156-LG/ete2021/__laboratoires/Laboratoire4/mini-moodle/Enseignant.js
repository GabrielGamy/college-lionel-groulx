import React from "react";
import { View, Text, StyleSheet, TextInput, Button, Alert } from "react-native";

class Enseignant extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
    };
  }

  updateMessage = (newMessage) => {
    this.setState({ message: newMessage });
  };

  effacerMessage = () => {
    this.setState({ message: "" });
  };

  envoyerMessage = () => {
    if (this.state.message.length === 0) {
      Alert.alert("Erreur", "Votre message est vide", [
        {
          text: "Ok merci!",
        },
      ]);
    } else {
      Alert.alert("Email", "Message transmis avec succes!", [
        {
          text: "D'accord",
        },
      ]);
    }
  };

  render() {
    return (
      <View>
        <Text>Envoyer un courriel:</Text>
        <TextInput
          value={this.state.message}
          style={styles.zoneCourrielInput}
          numberOfLines={6}
          multiline
          onChangeText={this.updateMessage}
        />
        <View style={styles.emailButtons}>
          <Button title="Envoyer" onPress={this.envoyerMessage} />
          <Button
            title="Effacer"
            color="orange"
            onPress={this.effacerMessage}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  zoneCourrielInput: {
    marginVertical: 16,
    borderColor: "black",
    borderWidth: 1,
    minHeight: 180,
  },
  emailButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default Enseignant;

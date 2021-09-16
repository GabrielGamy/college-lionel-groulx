import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Header } from "./components/Header/Header";
import { ChronoInput } from "./components/ChronoInput/ChronoInput";
import { Entypo, MaterialIcons } from "@expo/vector-icons";

export default class App extends React.Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Header />
          <ChronoInput />
          <View style={styles.imageContainer}>
            <Image
              style={styles.imageSablier}
              source={require("./assets/sablier.jpeg")}
            />
          </View>
          <View style={styles.buttons}>
            <TouchableOpacity
              style={[styles.buttonsActions, styles.buttonCommencer]}
            >
              <Entypo name="clock" size={24} color="white" />
              <Text style={styles.buttonCommencerText}>Commencer</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.buttonsActions, styles.buttonAnnuler]}
            >
              <MaterialIcons name="cancel" size={24} color="white" />
              <Text style={styles.buttonAnnulerText}>Annuler</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  imageSablier: {
    width: 150,
    height: 150,
  },
  buttons: {
    margin: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonsActions: {
    marginBottom: 8,
    padding: 8,
    borderRadius: 6,
    flexDirection: "row",
    alignItems: "center",
    width: 150,
  },
  buttonCommencer: {
    backgroundColor: "#0057D8",
  },
  buttonCommencerText: {
    color: "white",
    textAlign: "center",
    marginLeft: 16,
  },
  buttonAnnuler: {
    backgroundColor: "orange",
  },
  buttonAnnulerText: {
    textAlign: "center",
    marginLeft: 16,
  },
});

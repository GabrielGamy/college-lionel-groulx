import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import { Header } from "./components/Header/Header";
import { ChronoInput } from "./components/ChronoInput/ChronoInput";
import { Entypo, MaterialIcons } from "@expo/vector-icons";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: Dimensions.get("window").width,
      hours: "00",
      minutes: "00",
    };
  }

  componentDidMount() {
    this.dimensionSubscription = Dimensions.addEventListener(
      "change",
      this.onChange
    );
  }

  onChange = ({ window }) => {
    this.setState({ width: window.width });
  };

  onSetHours = (text) => {
    this.setState({ hours: text });
  };

  onSetMinutes = (text) => {
    this.setState({ minutes: text });
  };

  render() {
    const { hours, minutes, width } = this.state;
    const buttonStyles =
      width > 600 ? styles.buttonsHorizontal : styles.buttonsVertical;
    return (
      <ScrollView>
        <View style={styles.container}>
          <Header />
          <ChronoInput
            hours={hours}
            minutes={minutes}
            onSetHours={this.onSetHours}
            onSetMinutes={this.onSetMinutes}
          />
          <View style={styles.imageContainer}>
            <Image
              style={styles.imageSablier}
              source={require("./assets/sablier.jpeg")}
            />
          </View>
          <View style={[buttonStyles]}>
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
  buttonsHorizontal: {
    margin: 16,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  buttonsVertical: {
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

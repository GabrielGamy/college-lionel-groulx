/**
 * Exercice 1
 * Transformer le composant App.js en fonction
 */
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Alert,
} from "react-native";
import { Header } from "../../components/Header/Header";
import { ChronoInput } from "./../components/ChronoInput/ChronoInput";
import { Entypo, MaterialIcons } from "@expo/vector-icons";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: Dimensions.get("window").width,
      minutes: "00",
      seconds: "00",
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

  onSetMinutes = (text) => {
    const minutes = parseInt(text);
    this.setState({ minutes: this.formatNumber(minutes) });
  };

  onSetSeconds = (text) => {
    const seconds = parseInt(text);
    this.setState({ seconds: this.formatNumber(seconds) });
  };

  start = () => {
    this.startSubscription = setInterval(() => {
      const currentMinutes = parseInt(this.state.minutes);
      const currentSeconds = parseInt(this.state.seconds);

      if (this.state.minutes === "00" && this.state.seconds === "00") {
        Alert.alert("Reveil Matin", "Il est temps de vous lever!", [
          { text: "Merci!" },
        ]);
        this.cancel();
        return;
      }

      if (currentSeconds === 0) {
        this.setState({ minutes: this.formatNumber(currentMinutes - 1) });
        this.setState({ seconds: 59 });
      } else {
        this.setState({ seconds: this.formatNumber(currentSeconds - 1) });
      }
    }, 1000);
  };

  formatNumber = (number) => {
    if (number > 9) return number;
    return "0" + number;
  };

  cancel = () => {
    if (this.startSubscription) {
      clearInterval(this.startSubscription);
    }
  };

  componentWillUnmount() {
    this.cancel();
  }

  render() {
    const { minutes, seconds, width } = this.state;
    const buttonStyles =
      width > 600 ? styles.buttonsHorizontal : styles.buttonsVertical;
    return (
      <ScrollView>
        <View style={styles.container}>
          <Header />
          <ChronoInput
            minutes={minutes}
            seconds={seconds}
            onSetMinutes={this.onSetMinutes}
            onSetSeconds={this.onSetSeconds}
          />
          <View style={styles.imageContainer}>
            <Image
              style={styles.imageSablier}
              source={require("./../assets/sablier.jpeg")}
            />
          </View>
          <View style={[buttonStyles]}>
            <TouchableOpacity
              onPress={this.start}
              style={[styles.buttonsActions, styles.buttonCommencer]}
            >
              <Entypo name="clock" size={24} color="white" />
              <Text style={styles.buttonCommencerText}>Commencer</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.buttonsActions, styles.buttonAnnuler]}
              onPress={this.cancel}
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

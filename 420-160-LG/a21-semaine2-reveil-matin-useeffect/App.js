/**
 * Exercice 1
 * Transformer le composant App.js en fonction
 */
import React, { useState, useEffect } from "react";
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
import { Header } from "./components/Header/Header";
import { ChronoInput } from "./components/ChronoInput/ChronoInput";
import { Entypo, MaterialIcons } from "@expo/vector-icons";

var startSubscription = null;

const App = () => {
  const [width, setWidth] = useState(Dimensions.get("window").width);
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");
  const [isTimerEnabled, setIsTimerEnabled] = useState(false);

  useEffect(() => {
    Dimensions.addEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const isTimeUp = minutes === "00" && seconds === "00";
    if (isTimerEnabled && isTimeUp) {
      Alert.alert("Reveil Matin", "Il est temps de vous lever!", [
        { text: "Merci!" },
      ]);
      cancel();
    }
  }, [minutes, seconds, isTimerEnabled]);

  const onChange = ({ window }) => {
    setWidth(window.width);
  };

  const onSetMinutes = (text) => {
    setMinutes(formatNumber(parseInt(text)));
  };

  const onSetSeconds = (text) => {
    setSeconds(formatNumber(parseInt(text)));
  };

  const start = () => {
    setIsTimerEnabled(true);
    startSubscription = setInterval(() => {
      setSeconds((seconds) => {
        const currentSeconds = parseInt(seconds);
        if (currentSeconds === 0) {
          // Modifier les minutes lorsque les secondes sont à zero
          setMinutes((minutes) => {
            if (currentSeconds === 0) {
              return formatNumber(parseInt(minutes) - 1);
            }
            return minutes;
          });
          // Remettre les secondes a 59 pour la prochaine minute
          return 59;
        } else {
          // Decrementer les secondes pour atteindre zero
          return formatNumber(currentSeconds - 1);
        }
      });
    }, 1000);
  };

  const formatNumber = (number) => {
    if (isNaN(number)) return "00";
    if (number > 9) return number;
    return "0" + number;
  };

  const cancel = () => {
    if (startSubscription) {
      clearInterval(startSubscription);
    }
    setIsTimerEnabled(false);
  };

  const buttonStyles =
    width > 600 ? styles.buttonsHorizontal : styles.buttonsVertical;
  return (
    <ScrollView>
      <View style={styles.container}>
        <Header />
        <ChronoInput
          minutes={minutes}
          seconds={seconds}
          onSetMinutes={onSetMinutes}
          onSetSeconds={onSetSeconds}
        />
        <View style={styles.imageContainer}>
          <Image
            style={styles.imageSablier}
            source={require("./assets/sablier.jpeg")}
          />
        </View>
        <View style={[buttonStyles]}>
          <TouchableOpacity
            onPress={start}
            style={[styles.buttonsActions, styles.buttonCommencer]}
          >
            <Entypo name="clock" size={24} color="white" />
            <Text style={styles.buttonCommencerText}>Commencer</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.buttonsActions, styles.buttonAnnuler]}
            onPress={cancel}
          >
            <MaterialIcons name="cancel" size={24} color="white" />
            <Text style={styles.buttonAnnulerText}>Annuler</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default App;

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

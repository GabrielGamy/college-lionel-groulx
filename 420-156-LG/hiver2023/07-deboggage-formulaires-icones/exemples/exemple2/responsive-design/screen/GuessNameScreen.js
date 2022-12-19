import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TextInput,
  Alert,
} from "react-native";
import NameIndicator from "../components/NameIndicator";
import NAMES from "../resources/names";

const GuessNameScreen = (props) => {
  const [round, setRound] = useState(0);
  const [currentName, setCurrentName] = useState("");
  const [nameText, setNameText] = useState("");

  useEffect(() => {
    initGame();
  }, []);

  const initGame = () => {
    const randomIndex = Math.floor(Math.random() * NAMES.length);
    const theNameToGuess = NAMES[randomIndex];
    setCurrentName(theNameToGuess);
    setRound(theNameToGuess.length - 1);
    setNameText("");
  };

  const onCloseModal = () => {
    props.close();
  };

  const showMessage = (message, description) => {
    Alert.alert(message, description, [{ text: "Okay" }]);
  };

  const onGuessName = () => {
    if (nameText.length) {
      let isValid = nameText.trim() === currentName.trim();
      if (isValid) {
        showMessage("Good Job!", "The name you entered is valid!");
        initGame();
      } else {
        setRound((prevState) => prevState - 1);
        if (round <= 1) {
          props.onGameOver();
        }
      }
    } else {
      showMessage("Invalid Name", "Please enter a valid name!");
    }
  };

  const renderInput = () => {
    return (
      <TextInput
        style={styles.nameInput}
        placeholder="Guess the name here..."
        value={nameText}
        onChangeText={(text) => setNameText(text)}
      />
    );
  };

  const renderButtons = () => {
    const cancelBtnStyle = [styles.startBtn, styles.startBtnCancel];
    return (
      <View style={styles.btnContainer}>
        <TouchableOpacity style={cancelBtnStyle} onPress={onCloseModal}>
          <Text style={styles.startBtnText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.startBtn} onPress={onGuessName}>
          <Text style={styles.startBtnText}>Guess</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <Modal
      visible={props.visible}
      onRequestClose={() => onCloseModal()}
      onShow={() => initGame()}
    >
      <View style={styles.modalContainer}>
        <Text style={styles.startGametText}>Guess the name</Text>
        <View style={styles.container}>
          {renderInput()}
          {renderButtons()}
        </View>
        <NameIndicator nameToGuess={currentName} currentRound={round} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: "teal",
    alignItems: "center",
    paddingTop: 60,
  },
  container: {
    width: "80%",
    height: 200,
    backgroundColor: "white",
    borderRadius: 16,
    justifyContent: "space-around",
    alignItems: "center",
  },
  startGametText: {
    color: "white",
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 16,
  },
  btnContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  startBtn: {
    backgroundColor: "teal",
    padding: 16,
    minWidth: 120,
    width: 140,
    justifyContent: "center",
    alignItems: "center",
  },
  startBtnCancel: {
    backgroundColor: "orange",
  },
  startBtnText: {
    color: "white",
    fontSize: 16,
  },
  nameInput: {
    width: "60%",
    borderBottomWidth: 1,
    borderBottomColor: "black",
    height: 40,
  },
});

export default GuessNameScreen;

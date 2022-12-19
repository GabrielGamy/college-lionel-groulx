import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Image,
  Dimensions,
} from "react-native";

const GameOverScreen = (props) => {
  return (
    <Modal visible={props.visible} onRequestClose={() => props.close()}>
      <View style={styles.modalContainer}>
        <Image
          source={require("../assets/game-over.jpg")}
          style={styles.gameOverImage}
        />
        <TouchableOpacity style={styles.gameOverBtn}>
          <Text style={styles.gameOverBtnText} onPress={() => props.close()}>
            Go to home
          </Text>
        </TouchableOpacity>
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
  gameOverImage: {
    // ------------------------------
    // Responsive Game Over Image
    // width: Dimensions.get("window").width > 600 ? 150 : 300,
    // height: Dimensions.get("window").width > 600 ? 150 : 300,
    // ------------------------------
    // Non-Responsive Game Over Image
    width: 300,
    height: 300,
    // ------------------------------
    borderRadius: 300,
    marginBottom: 32,
  },
  gameOverBtn: {
    backgroundColor: "white",
    borderRadius: 32,
    padding: 16,
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
  },
  gameOverBtnText: {
    color: "teal",
    fontSize: 16,
  },
});

export default GameOverScreen;

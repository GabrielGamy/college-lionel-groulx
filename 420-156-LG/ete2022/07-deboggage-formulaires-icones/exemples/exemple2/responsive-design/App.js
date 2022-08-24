import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import Header from "./components/Header";
import StartGameScreen from "./screen/StartGameScreen";
import GuessNameScreen from "./screen/GuessNameScreen";
import GameOverScreen from "./screen/GameOverScreen";

export default function App() {
  const [startGameVisible, setStartGameVisible] = useState(false);
  const [gameOverVisible, setGameOverVisible] = useState(false);

  const toggleStartGame = (visible) => {
    setStartGameVisible(visible);
  };

  const toggleGameOver = (visible) => {
    setGameOverVisible(visible);
    if (visible) {
      setStartGameVisible(false);
    }
  };

  return (
    <ScrollView>
      <View style={styles.screen}>
        <Header headerTitle="Guess the Name" />
        <StartGameScreen start={() => toggleStartGame(true)} />
        <GuessNameScreen
          visible={startGameVisible}
          close={() => toggleStartGame(false)}
          onGameOver={() => toggleGameOver(true)}
        />
        <GameOverScreen
          visible={gameOverVisible}
          close={() => toggleGameOver(false)}
        />
        <StatusBar style="light" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

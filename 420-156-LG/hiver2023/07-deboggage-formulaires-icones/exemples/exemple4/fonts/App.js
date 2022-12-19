import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";

let customFonts = {
  "DynaPuff-Regular": require("./assets/DynaPuff-Regular.ttf"),
  "Inter-SemiBoldItalic":
    "https://rsms.me/inter/font-files/Inter-SemiBoldItalic.otf?v=3.12",
};

export default class App extends React.Component {
  state = {
    fontsLoaded: false,
  };

  componentDidMount() {
    this._loadFontsAsync();
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  render() {
    if (!this.state.fontsLoaded) {
      return null;
    }

    return (
      <View style={styles.container}>
        <Text>Font: Default</Text>
        <Text style={{ fontFamily: "Inter-SemiBoldItalic" }}>
          Font: Inter-SemiBoldItalic
        </Text>
        <Text style={{ fontFamily: "DynaPuff-Regular" }}>
          Font: DynaPuff-Regular
        </Text>
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

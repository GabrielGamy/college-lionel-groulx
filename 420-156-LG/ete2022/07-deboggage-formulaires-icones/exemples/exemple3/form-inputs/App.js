import React from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import FormTextInput from "./components/FormTextInput";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.screen}>
        <Header headerTitle="Form Inputs" />
        <FormTextInput />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

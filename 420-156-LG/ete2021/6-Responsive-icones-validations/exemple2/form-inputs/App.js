import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import FormTextInput from "./components/FormTextInput";

export default function App() {
  return (
    <View style={styles.screen}>
      <Header headerTitle="Form Inputs" />
      <FormTextInput />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, View } from "react-native";

const FormTextInput = () => {
  const [text, onChangeText] = React.useState("Gabriel");
  const [phone, onChangePhone] = React.useState(null);
  const [textMultiline, onChangeMultiline] = React.useState("Multiline Input");

  return (
    <SafeAreaView>
      <View style={styles.headerContainer}>
        <Text style={styles.textHeader}>TextInput</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>Nom:</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />

        <Text style={styles.text}>Mot de passe:</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          secureTextEntry
        />

        <Text style={styles.text}>Cellulaire:</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangePhone}
          value={phone}
          placeholder="Phone"
          keyboardType="numeric"
        />

        <Text style={styles.text}>Commentaires:</Text>
        <TextInput
          style={styles.inputMultiline}
          onChangeText={onChangeMultiline}
          value={textMultiline}
          placeholder="Ecrire sur plusieurs lignes"
          multiline
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  textHeader: {
    color: "teal",
    fontSize: 30,
  },
  text: {
    height: 20,
    margin: 12,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  inputMultiline: {
    height: 60,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default FormTextInput;

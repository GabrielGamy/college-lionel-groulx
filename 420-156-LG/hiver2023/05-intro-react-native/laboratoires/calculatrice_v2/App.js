import React from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import Header from "./components/Header";
import styles from "./App.style";

export default class App extends React.Component {
  state = {
    nb1: 0,
    nb2: 0,
    result: 0,
    operator: "",
  };

  afficherNombres = () => {
    const { nb1, nb2 } = this.state;
    return (
      <View style={styles.inputWrapper}>
        <View style={styles.inputContainer}>
          <Text>Nombre 1:</Text>
          <TextInput
            style={styles.input}
            value={nb1}
            keyboardType="numeric"
            onChangeText={(text) => this.setState({ nb1: text })}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text>Nombre 2:</Text>
          <TextInput
            style={styles.input}
            value={nb2}
            keyboardType="numeric"
            onChangeText={(text) => this.setState({ nb2: text })}
          />
        </View>
      </View>
    );
  };

  afficherOperateurs = () => {
    return (
      <View style={{ marginTop: 32 }}>
        <Text style={{ textAlign: "center" }}>{"Opérateurs"}</Text>
        <View style={styles.btnWrapper}>
          <TouchableOpacity
            style={styles.btnOp}
            onPress={() => this.changerOperateur("+")}
          >
            <Text>+</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnOp}
            onPress={() => this.changerOperateur("-")}
          >
            <Text>-</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnOp}
            onPress={() => this.changerOperateur(":")}
          >
            <Text>:</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnOp}
            onPress={() => this.changerOperateur("x")}
          >
            <Text>x</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  afficherResultat = () => {
    return (
      <View style={styles.resultat}>
        <Text style={{ textAlign: "center" }}>{"Resultat"}</Text>
        <View
          style={[
            styles.btnWrapper,
            { justifyContent: "flex-start", alignItems: "center" },
          ]}
        >
          <TouchableOpacity style={styles.btnOp} onPress={this.calculer}>
            <Text>=</Text>
          </TouchableOpacity>
          <View style={{ marginLeft: 32 }}>
            <Text>Total: {this.state.result}</Text>
          </View>
        </View>
      </View>
    );
  };

  changerOperateur = (operator) => {
    this.setState({ operator });
  };

  calculer = () => {
    /** 
    let nb1 = this.state.nb1;
    let nb2 = this.state.nb2;
    let operator = this.state.operator;*/
    let { nb1, nb2, operator } = this.state;
    let result = 0;

    nb1 = parseInt(nb1);
    nb2 = parseInt(nb2);

    if (Number.isNaN(nb1)) {
      Alert.alert("Nombre invalide", "Le nombre 1 est invalide", [
        { text: "D'accord", onPress: () => console.log("OK Pressed") },
      ]);
      return;
    }

    if (Number.isNaN(nb2)) {
      Alert.alert("Nombre invalide", "Le nombre 2 est invalide", [
        { text: "D'accord", onPress: () => console.log("OK Pressed") },
      ]);
      return;
    }

    if (operator === "+") {
      result = nb1 + nb2;
    } else if (operator === "-") {
      result = nb1 - nb2;
    } else if (operator === "x") {
      result = nb1 * nb2;
    } else {
      if (nb2 === 0) {
        Alert.alert("Nombre invalide", "Imposible de diviser un nombre par 0", [
          {
            text: "Annuler",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "D'accord", onPress: () => console.log("OK Pressed") },
        ]);
        return;
      }

      result = nb1 / nb2;
    }

    this.setState({ result });
  };

  render() {
    return (
      <>
        <Header />
        {this.afficherNombres()}
        {this.afficherOperateurs()}
        {this.afficherResultat()}
      </>
    );
  }
}

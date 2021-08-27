/**
 * Programmation d'applications mobiles 1 - Collège Lionel-Groulx
 * Calculatrice simple
 */
import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

class Header extends React.Component {
  render() {
    return (
      <View style={styles.haeder}>
        <Text style={styles.headerText}>Calculatrice</Text>
      </View>
    );
  }
}

export default class App extends React.Component {
  state = {
    number1: "0",
    number2: "0",
    operator: "",
    result: 0,
  };

  renderOperators = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.containerTitle}>{"Opérateurs"}</Text>
        <View style={styles.operatorButtons}>
          {this.renderOperatorBtn("+")}
          {this.renderOperatorBtn("-")}
          {this.renderOperatorBtn(":")}
          {this.renderOperatorBtn("x")}
        </View>
      </View>
    );
  };

  renderOperatorBtn = (btnText) => {
    return (
      <TouchableOpacity
        style={styles.operatorBtn}
        onPress={() => this.onChangeOperator(btnText)}
      >
        <Text style={styles.operatorBtnText}>{btnText}</Text>
      </TouchableOpacity>
    );
  };

  renderResult = () => {
    const { result } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.containerTitle}>Resultat</Text>
        <View style={styles.resultContainer}>
          <TouchableOpacity
            style={styles.operatorBtn}
            onPress={this.calculateResult}
          >
            <Text style={styles.operatorBtnText}>=</Text>
          </TouchableOpacity>
          <Text style={styles.resultText}>{result}</Text>
        </View>
      </View>
    );
  };

  onChangeNumber1 = (value) => {
    this.setState({ number1: value });
  };

  onChangeNumber2 = (value) => {
    this.setState({ number2: value });
  };

  onChangeOperator = (operator) => {
    this.setState({ operator });
  };

  calculateResult = () => {
    const { operator, number1, number2 } = this.state;
    let total = 0;
    switch (operator) {
      case "+":
        total = parseInt(number1) + parseInt(number2);
        break;
      case "-":
        total = parseInt(number1) - parseInt(number2);
        break;
      case ":":
        total = parseInt(number1) / parseInt(number2);
        break;
      case "x":
        total = parseInt(number1) * parseInt(number2);
        break;
    }
    this.setState({ result: total.toFixed(1) });
  };

  render() {
    return (
      <View>
        <Header />
        <View style={styles.numberContainer}>
          <View>
            <Text>Nombre 1</Text>
            <TextInput
              style={styles.numberInput}
              onChangeText={this.onChangeNumber1}
              keyboardType="numeric"
              value={this.state.number1}
            />
          </View>
          <View>
            <Text>Nombre 2</Text>
            <TextInput
              style={styles.numberInput}
              onChangeText={this.onChangeNumber2}
              keyboardType="numeric"
              value={this.state.number2}
            />
          </View>
        </View>
        {this.renderOperators()}
        {this.renderResult()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  haeder: {
    paddingTop: 40,
    paddingBottom: 16,
    backgroundColor: "teal",
  },
  headerText: {
    color: "white",
    fontSize: 24,
    textAlign: "center",
  },
  numberInput: {
    height: 50,
    borderColor: "teal",
    borderWidth: 2,
    width: 100,
    marginTop: 4,
    textAlign: "center",
    borderRadius: 8,
    fontSize: 20,
  },
  numberContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 16,
  },
  container: {
    marginHorizontal: 16,
    marginVertical: 36,
  },
  containerTitle: {
    fontSize: 26,
    textAlign: "center",
    marginBottom: 16,
  },
  operatorBtn: {
    borderWidth: 2,
    borderColor: "teal",
    borderRadius: 8,
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    margin: 4,
  },
  operatorBtnText: {
    fontSize: 24,
  },
  operatorButtons: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  resultContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  resultText: {
    marginLeft: 16,
    fontSize: 32,
  },
});

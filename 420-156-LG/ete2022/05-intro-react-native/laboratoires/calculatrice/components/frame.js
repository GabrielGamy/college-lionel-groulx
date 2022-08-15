import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import buttons from "./buttons";

class Frame extends React.Component {
  state = {
    result: "0",
    operande1: "",
    operande2: "",
    operator: "",
  };

  onPress = (text) => {
    if (text == "=") {
      let op1 = parseInt(this.state.operande1);
      let op2 = parseInt(this.state.operande2);
      this.calculate(op1, op2, this.state.operator);
      return;
    }

    if (text == "+" || text == "-" || text == "/" || text == "*") {
      this.setOperator(text);
    } else if (this.state.operator !== "") {
      this.setOp2(text);
    } else {
      this.setOp1(text);
    }
  };

  setOp1 = (op1) => {
    const value = this.state.operande1 + op1;
    this.setState({ result: value, operande1: value });
  };

  setOp2 = (op2) => {
    const { result, operande2 } = this.state;
    this.setState({
      result: `${result}${op2}`,
      operande2: `${operande2}${op2}`,
    });
  };

  setOperator = (operator) => {
    const result = this.state.result;
    this.setState({
      result: `${result}${operator}`,
      operator: operator,
    });
  };

  calculate = (op1, op2, operator) => {
    let result = 0;

    switch (operator) {
      case "+":
        result = op1 + op2;
        break;
      case "-":
        result = op1 - op2;
        break;
      case "/":
        result = (op1 / op2).toFixed(2);
        break;
      case "*":
        result = op1 * op2;
        break;
    }

    this.setState({
      result,
      operande1: result,
      operande2: "",
      operator: "",
    });
  };

  render() {
    return (
      <View style={styles.frame}>
        <View style={styles.result}>
          <Text style={styles.resultText}>{this.state.result}</Text>
        </View>
        <View>
          {buttons.map((buttonList, rowIndex) => {
            return (
              <View key={`row-${rowIndex}`} style={styles.row}>
                {buttonList.map((item, colIndex) => {
                  return (
                    <TouchableOpacity
                      key={`col-${colIndex}`}
                      style={[styles.button, item.style]}
                      onPress={() => this.onPress(item.text)}
                      disabled={item.disabled}
                    >
                      <Text style={[styles.buttonText, item.styleText]}>
                        {item.text}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            );
          })}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  frame: {
    minHeight: 100,
    minWidth: 100,
    margin: 32,
  },
  result: {
    height: 70,
    backgroundColor: "#333333",
    paddingHorizontal: 8,
    justifyContent: "center",
  },
  resultText: {
    color: "white",
    fontSize: 36,
    textAlign: "right",
  },
  button: {
    backgroundColor: "#808080",
    padding: 12,
    flex: 1,
    height: 70,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
  },
});

export default Frame;

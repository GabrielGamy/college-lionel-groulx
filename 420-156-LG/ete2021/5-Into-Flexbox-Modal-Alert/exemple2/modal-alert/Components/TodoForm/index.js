import React from "react";
import { View, TextInput, Text, TouchableOpacity, Alert } from "react-native";
import styles from "./style";

class TodoForm extends React.Component {
  state = {
    todoText: "",
  };

  onAdd = () => {
    const { todoText } = this.state;
    if (todoText.length) {
      this.props.onAddTodo(todoText.toUpperCase());
    } else {
      Alert.alert("Empty", "You need to provide a valid todo!", [
        {
          text: "Okay",
          onPress: () => {
            console.log("Okay clicked!");
          },
        },
      ]);
    }
  };

  onReset = () => {
    this.setState({ todoText: "" });
  };

  render() {
    return (
      <View style={styles.flexFormContainer}>
        <TextInput
          value={this.state.todoText}
          onChangeText={(text) => this.setState({ todoText: text })}
          style={styles.textInput}
          placeholder="Enter a todo"
        />
        <View>
          <TouchableOpacity
            style={[styles.button, styles.buttonReset]}
            onPress={this.onReset}
          >
            <Text style={styles.buttonText}>Reset</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.onAdd}>
            <Text style={styles.buttonText}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default TodoForm;

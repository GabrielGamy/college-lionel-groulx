import React from "react";
import { View, TouchableOpacity, Text, Modal, Button } from "react-native";
import styles from "./style";

const TodoList = (props) => {
  return (
    <Modal visible={props.visible} animationType="slide" transparent={false}>
      <View style={styles.modalContainer}>
        <Button title="Add new todo" onPress={() => props.close()} />
        <View style={[styles.todoList__flexContainer, styles.flexTodoList]}>
          {props.todos.map((item) => {
            return (
              <TouchableOpacity
                key={item.id}
                style={[styles.todoItem__flexItem, styles.flexTodoItem]}
              >
                <Text>{item.value}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </Modal>
  );
};

export default TodoList;

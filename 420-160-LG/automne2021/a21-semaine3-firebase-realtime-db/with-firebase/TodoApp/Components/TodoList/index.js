import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { deleteTodo } from "../../database/todos";
import styles from "./style";

const TodoList = (props) => {
  return (
    <>
      <View style={[styles.todoList__flexContainer, styles.flexTodoList]}>
        {props.todos.map((item) => {
          return (
            <TouchableOpacity
              key={item.id}
              style={[styles.todoItem__flexItem, styles.flexTodoItem]}
              onPress={() => deleteTodo(item.id)}
            >
              <Text>{item.todo}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </>
  );
};

export default TodoList;

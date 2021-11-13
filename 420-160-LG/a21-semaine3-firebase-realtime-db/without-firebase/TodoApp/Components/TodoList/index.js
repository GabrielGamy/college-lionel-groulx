import React from "react";
import { View, TouchableOpacity, Text, FlatList } from "react-native";
import styles from "./style";

const TodoList = (props) => {
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.todoItem__flatList}>
        <Text>{item.value}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <View style={[styles.todoList__flexContainer, styles.flexTodoList]}>
        {!props.useFlatList &&
          props.todos.map((item) => {
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

      {props.useFlatList && (
        <FlatList
          data={props.todos}
          renderItem={renderItem}
          style={styles.todoList__flatList}
          keyExtractor={(item) => item.id}
        />
      )}
    </>
  );
};

export default TodoList;

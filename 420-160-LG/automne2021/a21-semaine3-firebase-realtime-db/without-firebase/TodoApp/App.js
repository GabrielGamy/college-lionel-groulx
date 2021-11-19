import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Image, View, ScrollView } from "react-native";
import TodoForm from "./Components/TodoForm/index";
import TodoList from "./Components/TodoList/index";

export default function App() {
  const [todos, setTodos] = useState([]);

  const onAddTodo = (newTodo) => {
    setTodos((oldTodos) => [
      ...oldTodos,
      {
        id: new Date().getUTCMilliseconds(),
        value: newTodo,
      },
    ]);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image style={styles.todoImage} source={require("./assets/todo.png")} />
        <TodoForm onAddTodo={onAddTodo} />
        <TodoList todos={todos} useFlatList={false} />
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
    alignItems: "center",
  },
  todoImage: {
    marginBottom: 16,
    width: 200,
    height: 200,
  },
});

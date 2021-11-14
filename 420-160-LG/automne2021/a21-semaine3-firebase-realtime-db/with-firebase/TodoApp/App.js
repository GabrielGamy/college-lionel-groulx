import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Image, View, ScrollView } from "react-native";
import TodoForm from "./Components/TodoForm/index";
import TodoList from "./Components/TodoList/index";
import { addTodo, getTodos } from "./database/todos";

export default function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos((data) => {
      console.log("Firebase Todos : ", data);

      let results = [];
      Object.keys(data).forEach((item) => {
        results.push(data[item]);
      });

      console.log("App Todos : ", results);

      setTodos(results);
    });
  }, []);

  const onAddTodo = (newTodo) => {
    addTodo(newTodo);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image style={styles.todoImage} source={require("./assets/todo.png")} />
        <TodoForm onAddTodo={onAddTodo} />
        <TodoList todos={todos} />
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

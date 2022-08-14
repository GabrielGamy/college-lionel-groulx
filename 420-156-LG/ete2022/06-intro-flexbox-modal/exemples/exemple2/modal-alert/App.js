import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Image,
  View,
  Text,
  ScrollView,
  Button,
} from "react-native";
import TodoForm from "./Components/TodoForm/index";
import TodoList from "./Components/TodoList/index";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [showAllTodos, setShowAllTodos] = useState(false);

  const onAddTodo = (newTodo) => {
    setTodos((oldTodos) => [
      ...oldTodos,
      {
        id: `#-${todos.length + 1}`,
        value: newTodo,
      },
    ]);
  };

  const showAllTodoScreen = () => setShowAllTodos(true);
  const hideAllTodoScreen = () => setShowAllTodos(false);

  const lastestTodo = todos.length ? todos[todos.length - 1].value : "";

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image style={styles.todoImage} source={require("./assets/todo.png")} />
        <TodoForm onAddTodo={onAddTodo} />
        <View style={styles.todoInfoContainer}>
          <Text>{`Lastest todo added: ${lastestTodo}`}</Text>
          <Button
            style={styles.showAllBtn}
            title="Show all todos"
            onPress={showAllTodoScreen}
          />
        </View>
        <TodoList
          todos={todos}
          visible={showAllTodos}
          close={hideAllTodoScreen}
        />
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
  todoInfoContainer: {
    marginTop: 16,
    height: 80,
    justifyContent: "space-between",
  },
});

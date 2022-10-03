import React, { useEffect, useState } from "react";
import {
  Image,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import Header from "./components/header";

import {
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "./firebase";
import { async } from "@firebase/util";

function App() {
  const [todoText, setTodoText] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    loadTodos();
  }, []);

  const onChangeTodoText = (text) => {
    setTodoText(text);
  };

  const resetTodoText = () => {
    setTodoText("");
  };

  const addTodoText = async () => {
    try {
      const docRef = await addDoc(collection(db, "todos"), {
        value: todoText,
      });

      setTodos([
        {
          id: docRef.id,
          value: todoText,
        },
        ...todos,
      ]);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const beforeDelete = (id) => {
    Alert.alert("Delete", "Are you sure?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Ok",
        style: "ok",
        onPress: () => {
          deleteTodoText(id);
        },
      },
    ]);
  };

  const deleteTodoText = async (id) => {
    await deleteDoc(doc(db, "todos", id));
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const updateTodoText = async (id, newValue) => {
    await updateDoc(doc(db, "todos", id), {
      value: newValue,
      updateDate: new Date(),
    });
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.todoItem}>
        <Text>{item.value}</Text>
        <TouchableOpacity onPress={() => beforeDelete(item.id)}>
          <Image
            style={styles.removeIcon}
            source={require("./assets/remove.jpeg")}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const loadTodos = async () => {
    const results = [];

    const querySnapshot = await getDocs(collection(db, "todos"));

    querySnapshot.forEach((doc) => {
      const todo = {
        id: doc.id,
        ...doc.data(),
      };
      results.push(todo);
    });

    setTodos(results);
  };

  return (
    <View style={styles.container}>
      <Header />
      <Image style={styles.image} source={require("./assets/todo.png")} />
      <View style={styles.todoForm}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeTodoText}
          value={todoText}
        />
        <View>
          <Button title="Add" color="#1E90FF" onPress={addTodoText} />
        </View>
        <View style={{ marginVertical: 8 }}>
          <Button title="Reset" color="teal" onPress={resetTodoText} />
        </View>
      </View>
      <FlatList
        data={todos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.todoList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    margin: 20,
    width: 200,
    height: 200,
    alignSelf: "center",
  },
  todoForm: {
    marginHorizontal: 16,
    backgroundColor: "#F8F8FF",
    padding: 16,
  },
  input: {
    height: 30,
    borderBottomWidth: 1,
    borderColor: "black",
  },
  todoList: {
    margin: 16,
  },
  todoItem: {
    backgroundColor: "#F8F8FF",
    padding: 16,
    marginBottom: 6,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  removeIcon: {
    width: 20,
    height: 20,
  },
});

export default App;

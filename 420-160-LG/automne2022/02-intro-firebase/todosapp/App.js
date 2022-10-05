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
import { Ionicons } from "@expo/vector-icons";

import {
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "./firebase";

function App() {
  const [todoText, setTodoText] = useState("");
  const [todos, setTodos] = useState([]);
  const [email, setEmail] = useState("");

  useEffect(() => {
    loadTodos();
  }, [email]);

  const onChangeTodoText = (text) => {
    setTodoText(text);
  };

  const resetTodoText = () => {
    setTodoText("");
  };

  const addTodoText = async () => {
    try {
      const user = await getUser(email);
      if (!user) {
        Alert.alert("Add Todo", "User not found!");
        return;
      }

      const docRef = await addDoc(collection(db, "todos"), {
        value: todoText,
        userId: user.id,
        userEmail: user.email,
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
    const user = await getUser(email);
    if (user) {
      const results = [];
      const querySnapshot = await getDocs(collection(db, "todos"));

      querySnapshot.forEach((doc) => {
        const todo = {
          id: doc.id,
          ...doc.data(),
        };

        if (todo.userEmail === email) {
          results.push(todo);
        }
      });

      setTodos(results);
    }
  };

  const addUser = async () => {
    try {
      const user = await getUser(email);
      if (user) {
        Alert.alert("Add User", "User already registered!");
      }

      await addDoc(collection(db, "users"), { email: email });

      Alert.alert("New User", "New User Added!");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const getUser = async (email) => {
    const userList = [];
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      const user = {
        id: doc.id,
        ...doc.data(),
      };
      userList.push(user);
    });
    return userList.find((u) => u.email == email);
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.userForm}>
        <TextInput
          style={[styles.input, { flex: 1 }]}
          placeholder="Enter your email"
          autoComplete="email"
          keyboardType="email-address"
          textContentType="emailAddress"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TouchableOpacity onPress={addUser}>
          <Ionicons name="ios-add-circle" size={42} color="#1E90FF" />
        </TouchableOpacity>
      </View>
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
  userForm: {
    marginHorizontal: 16,
    marginVertical: 8,
    backgroundColor: "#F8F8FF",
    padding: 8,
    flexDirection: "row",
    alignItems: "center",
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

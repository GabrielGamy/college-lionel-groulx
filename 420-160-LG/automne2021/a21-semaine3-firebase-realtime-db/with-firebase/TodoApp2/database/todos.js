import { database } from "./firebase";
import { ref, set, onValue, push, child } from "firebase/database";

const addTodo = (todo) => {
  const newTodo = {
    id: push(child(ref(database), "todos")).key,
    todo: todo,
    creationDate: new Date().toISOString(),
  };

  set(ref(database, "todos/" + newTodo.id), newTodo);
};

const deleteTodo = (todoId) => {
  set(ref(database, "todos/" + todoId), null);
};

const getTodos = (callback) => {
  const todosRef = ref(database, "todos/");
  onValue(todosRef, (snapshot) => {
    const todoList = snapshot.val() || {};
    callback(todoList);
  });
};

export { getTodos, addTodo, deleteTodo };

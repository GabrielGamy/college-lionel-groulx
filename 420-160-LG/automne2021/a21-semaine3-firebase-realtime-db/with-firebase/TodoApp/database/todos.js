import firebase from "./firebase";

const addTodo = (todo) => {
  const newTodo = {
    id: firebase.database().ref().child("todos").push().key,
    todo: todo,
    creationDate: new Date().toISOString(),
  };

  firebase
    .database()
    .ref("todos/" + newTodo.id)
    .set(newTodo);
};

const deleteTodo = (todoId) => {
  firebase
    .database()
    .ref("todos/" + todoId)
    .remove();
};

const getTodos = (callback) => {
  /**
   * once() s'execute une seule fois.
    firebase
    .database()
    .ref("todos/")
    .once("value", (snapshot) => {
      const todoList = snapshot.val() || [];
      callback(todoList);
    });
     */

  firebase
    .database()
    .ref("todos/")
    .on("value", (snapshot) => {
      const todoList = snapshot.val() || {};
      callback(todoList);
    });
};

export { getTodos, addTodo, deleteTodo };

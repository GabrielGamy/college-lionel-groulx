import { database } from "./firebase";
import { ref, set, onValue, push, child } from "firebase/database";

const addUser = (user) => {
  const newUser = {
    id: push(child(ref(database), "users")).key,
    creationDate: new Date().toISOString(),
    ...user,
  };

  set(ref(database, "users/" + newUser.id), newUser);
};

const getUsers = (callback) => {
  const todosRef = ref(database, "users/");
  onValue(todosRef, (snapshot) => {
    const todoList = snapshot.val() || {};
    callback(todoList);
  });
};

export { getUsers, addUser };

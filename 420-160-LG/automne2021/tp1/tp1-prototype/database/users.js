import { database } from "./firebase";
import { ref, set, onValue, push, child } from "firebase/database";
import AsyncStorage from "@react-native-async-storage/async-storage";

const logoutUser = async (callback) => {
  await AsyncStorage.clear();
  callback();
};

const addUser = (user, callback) => {
  /**
   * Verifier si ce user existe ou pas avant de faire un ajout.
   */
  getUsers((users) => {
    const userExist = users.filter((u) => u.phone === user.phone).length > 0;
    // L'ajout se fait seulement si ce user n'existe pas dans la bd.
    if (!userExist) {
      const newUser = {
        id: push(child(ref(database), "users")).key,
        creationDate: new Date().toISOString(),
        ...user,
      };
      set(ref(database, "users/" + newUser.id), newUser);
    }
    callback();
  });
};

const getCurrentUser = async () => {
  try {
    let userInfo = await AsyncStorage.getItem("loginInfo");
    userInfo = userInfo ? JSON.parse(userInfo) : null;
    return userInfo;
  } catch (e) {
    console.log("getCurrentUser() - error: ", e);
  }
  return null;
};

const getUsers = (callback) => {
  const userRef = ref(database, "users/");
  onValue(
    userRef,
    (snapshot) => {
      const userList = snapshot.val() || {};
      const users = [];
      Object.keys(userList).forEach((userId) => {
        users.push(userList[userId]);
      });
      callback(users);
    },
    { onlyOnce: true }
  );
};

export { getCurrentUser, getUsers, addUser, logoutUser };

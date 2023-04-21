import { db } from "../config/firebaseConfig";
import { ref, push, set, child, get } from "firebase/database";

const DB_COLLECTION = "customerService";

export const createUserData = async (email) => {
  const users = await getUsers();
  let user = users.filter((u) => u.email == email)[0];

  if (user) return user;

  user = await addUserData(email);
  return user;
};

export const getAdminData = async () => {
  const users = await getUsers();
  let admin = users.filter(
    (u) => u.email == "support-firebase@mailinator.com"
  )[0];

  if (!admin) throw new Error("Admin not registered!");

  return admin;
};

export const getUsers = async () => {
  const users = [];

  try {
    const db_ref = ref(db);
    const snapshot = await get(child(db_ref, DB_COLLECTION));

    if (snapshot.exists()) {
      const users_data = snapshot.val();

      Object.keys(users_data).forEach((user_key) => {
        users.push({
          id: user_key,
          ...users_data[user_key],
        });
      });
    } else {
      console.log("No data available");
    }
  } catch (error) {
    console.error("Error getUsers() :", error);
  }

  return users;
};

export const addUserData = async (email) => {
  try {
    const customerService_ref = ref(db, DB_COLLECTION);

    const new_user_ref = push(customerService_ref);

    const new_user = {
      email,
      displayName: email.split("@")[0],
      created: new Date().toISOString(),
    };

    set(new_user_ref, new_user);

    new_user.id = new_user_ref.key;
    return new_user;
  } catch (e) {
    console.error("Error addUser() : ", e);
  }
};

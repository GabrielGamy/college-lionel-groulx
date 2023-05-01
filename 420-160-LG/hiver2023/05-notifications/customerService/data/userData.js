import { db } from "../config/firebaseConfig";
import { ref, update, child, get, push, set } from "firebase/database";

const DB_COLLECTION = "USERS_METADATA";

export const createUserMetadata = async (userMetadata) => {
  const users = await getUsersMetadata();

  if (users.length == 0) {
    userMetadata.role = "admin";
  }

  let user = users.filter((u) => u.email == userMetadata.email)[0];

  userMetadata = {
    ...userMetadata,
    ...user,
  };

  user = await createOrUpdateUserMetadata(userMetadata, user?.key);
  return user;
};

export const getAdminData = async () => {
  const users = await getUsersMetadata();
  let admin = users.filter((u) => u.role == "admin")[0];

  if (!admin) throw new Error("Admin not registered!");

  return admin;
};

export const getUsersMetadata = async () => {
  const users = [];

  try {
    const db_ref = ref(db);
    const snapshot = await get(child(db_ref, DB_COLLECTION));

    if (snapshot.exists()) {
      const usersMetadata = snapshot.val();
      Object.keys(usersMetadata).forEach((user_key) => {
        users.push({
          key: user_key,
          ...usersMetadata[user_key],
        });
      });
    }
  } catch (error) {
    console.error("Error getUsers() :", error);
  }

  return users;
};

export const createOrUpdateUserMetadata = async (userMetadata, userKey) => {
  try {
    if (userKey) {
      const updates = {};
      updates[`${DB_COLLECTION}/${userKey}`] = userMetadata;
      update(ref(db), updates);
    } else {
      const metadata_ref = push(ref(db, DB_COLLECTION));
      set(metadata_ref, userMetadata);
      userMetadata.key = metadata_ref.key;
    }

    return userMetadata;
  } catch (e) {
    console.error("Error createOrUpdateUserMetadata() : ", e);
  }
};

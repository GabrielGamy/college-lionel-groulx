import { db } from "../config/firebaseConfig";
import { ref, push, set, child, get, remove, onValue } from "firebase/database";

export const getContacts = async () => {
  const contacts = [];

  try {
    const dbRef = ref(db);
    const snapshot = await get(child(dbRef, "contact_v3_users"));
    if (snapshot.exists()) {
      const contactsObj = snapshot.val();
      Object.keys(contactsObj).forEach((contactKey) => {
        contacts.push({
          id: contactKey,
          ...contactsObj[contactKey],
        });
      });
    } else {
      console.log("No data available");
    }
  } catch (error) {
    console.error("Error getting documents: ", e);
  }

  return contacts;
};

export const getContactsOnValue = (callback) => {
  try {
    const contactsRef = ref(db, "contact_v3_users");
    onValue(contactsRef, (snapshot) => {
      if (snapshot.exists()) {
        const contactsObj = snapshot.val();
        const contacts = [];

        Object.keys(contactsObj).forEach((contactKey) => {
          contacts.push({
            id: contactKey,
            ...contactsObj[contactKey],
          });
        });

        callback(contacts);
      } else {
        callback([]);
      }
    });
  } catch (error) {
    console.error("Error getting documents: ", e);
  }
};

export const addContact = async (firstName, lastName) => {
  try {
    const contactListRef = ref(db, "contact_v3_users");
    const newContactRef = push(contactListRef);
    set(newContactRef, {
      firstName,
      lastName,
    });
    return newContactRef.key;
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const removeContact = async (id) => {
  const contactRef = ref(db, "contact_v3_users/" + id);
  remove(contactRef);
};

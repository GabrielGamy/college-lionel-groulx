import { db } from "../config/firebaseConfig";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
} from "firebase/firestore";

export const getContacts = async () => {
  const contacts = [];
  const querySnapshot = await getDocs(collection(db, "contact_v2_users"));
  querySnapshot.forEach((doc) => {
    contacts.push({
      id: doc.id,
      ...doc.data(),
    });
  });
  return contacts;
};

export const addContact = async (firstName, lastName) => {
  try {
    const docRef = await addDoc(collection(db, "contact_v2_users"), {
      firstName,
      lastName,
    });
    return docRef.id;
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const removeContact = async (id) => {
  await deleteDoc(doc(db, "contact_v2_users", id));
};

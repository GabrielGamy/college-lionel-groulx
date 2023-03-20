// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getFirestore,
  setDoc,
} from "firebase/firestore";
import { storeData } from "./localDatabase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbdUx21bxMRLkn80Fryrx1wuYyD2WfebU",
  authDomain: "aec-420-160-lg.firebaseapp.com",
  databaseURL: "https://aec-420-160-lg-default-rtdb.firebaseio.com",
  projectId: "aec-420-160-lg",
  storageBucket: "aec-420-160-lg.appspot.com",
  messagingSenderId: "478999458338",
  appId: "1:478999458338:web:88d94a747d4ee9cf8f507b",
  measurementId: "G-2E806XY5GW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

const getOrCreateUser = async (id) => {
  let user = null;
  try {
    if (id) {
      // get
      const docRef = doc(db, "contact_users", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        user = { id, ...docSnap.data() };
      } else {
        throw new Error(id);
      }
    } else {
      // create
      user = {
        username: "N/A",
        created: new Date().toISOString(),
        updated: null,
        contacts: [],
      };

      const docRef = await addDoc(collection(db, "contact_users"), user);
      await storeData("contact_user_id", docRef.id);
    }

    return user;
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

const updateUser = async (user) => {
  if (!(user && user.id)) return;
  try {
    // set
    user.updated = new Date().toISOString();
    await setDoc(doc(db, "contact_users", user.id), user);
  } catch (error) {
    console.error("Error setting document: ", e);
  }
};

export { getOrCreateUser, updateUser };

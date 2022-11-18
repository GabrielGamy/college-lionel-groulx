import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

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

const app = initializeApp(firebaseConfig);

// Get a reference to the database service
const database = getDatabase(app);
const storage = getStorage();

export { database, storage };

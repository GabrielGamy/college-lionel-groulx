import { initializeApp } from "firebase/app";

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
import { getDatabase } from "firebase/database";
// import { getFirestore } from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
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
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase

// Initialize Cloud Firestore and get a reference to the service
const db = getDatabase(app);

// Utiliser la technique onValue() ou get()
// false => onValue()
// true => get()
const readOnce = false;

export { db, readOnce };

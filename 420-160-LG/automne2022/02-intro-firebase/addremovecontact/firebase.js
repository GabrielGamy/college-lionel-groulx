// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
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
export const db = getFirestore(app);
export default app;

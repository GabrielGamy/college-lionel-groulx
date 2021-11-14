import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDoYou-_lgwKGfStD4g4n2ctQq-QG9kalw",
  authDomain: "clg-ete2021-demo-firebase.firebaseapp.com",
  databaseURL: "https://clg-ete2021-demo-firebase-default-rtdb.firebaseio.com",
  projectId: "clg-ete2021-demo-firebase",
  storageBucket: "clg-ete2021-demo-firebase.appspot.com",
  messagingSenderId: "97628418166",
  appId: "1:97628418166:web:c3112c0d8105590a4d2f57",
  measurementId: "G-0X3RWE98HQ",
};

firebase.initializeApp(firebaseConfig);

export default firebase;

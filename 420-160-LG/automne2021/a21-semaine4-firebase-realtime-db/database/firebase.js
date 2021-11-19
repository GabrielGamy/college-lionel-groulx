import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCUc-ItRfC-Ac7WJVybHgi7CNtbPsU3oO4",
  authDomain: "clg-automne2021-demo-firebase.firebaseapp.com",
  databaseURL:
    "https://clg-automne2021-demo-firebase-default-rtdb.firebaseio.com",
  projectId: "clg-automne2021-demo-firebase",
  storageBucket: "clg-automne2021-demo-firebase.appspot.com",
  messagingSenderId: "617820600286",
  appId: "1:617820600286:web:c2857e916527d54dc10f4f",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
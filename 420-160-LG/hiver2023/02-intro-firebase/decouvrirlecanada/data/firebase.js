import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, get } from "firebase/database";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  // ...
  // The value of `databaseURL` depends on the location of the database
  databaseURL: "https://aec-420-160-lg-default-rtdb.firebaseio.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

const getProvinces = async () => {
  try {
    const dbRef = ref(database);
    var snapshot = await get(child(dbRef, "states/"));
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      console.log("getProvinces(): No data available");
    }
  } catch (error) {
    console.error(error);
  }

  return [];
};

export { getProvinces };

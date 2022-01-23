import * as ImagePicker from "expo-image-picker";
import { getApps, initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import React from "react";
import {
  ActivityIndicator,
  Button,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View,
  LogBox,
  Alert,
} from "react-native";
import uuid from "uuid";

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

// Editing this file with fast refresh will reinitialize the app on every refresh, let's not do that
if (!getApps().length) {
  initializeApp(firebaseConfig);
}

// Firebase sets some timeers for a long period, which will trigger some warnings. Let's turn that off for this example
LogBox.ignoreLogs([`Setting a timer for a long period`]);

export default class App extends React.Component {
  state = {
    image: null,
    uploading: false,
  };

  async componentDidMount() {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Pemissions",
        "Sorry, we need camera roll permissions to make this work!"
      );
    }
  }

  render() {
    let { image } = this.state;

    return (
      <View style={styles.container}>
        {image && (
          <Text style={styles.resultText}>
            Exemple: Envoyer ImagePicker dans firebase
          </Text>
        )}

        <Button
          onPress={this._pickImage}
          title="Choisir une image dans la gallerie"
        />

        <Button onPress={this._takePhoto} title="Prendre une photo" />

        {this._maybeRenderImage()}
        {this._maybeRenderUploadingOverlay()}

        <StatusBar barStyle="default" />
      </View>
    );
  }

  _maybeRenderUploadingOverlay = () => {
    if (this.state.uploading) {
      return (
        <View style={[StyleSheet.absoluteFill, styles.uploadOverlay]}>
          <ActivityIndicator color="#fff" animating size="large" />
        </View>
      );
    }
  };

  _maybeRenderImage = () => {
    let { image } = this.state;
    if (!image) {
      return;
    }

    return (
      <View style={styles.imageContainer}>
        <View style={styles.imageWrapper}>
          <Image source={{ uri: image }} style={{ width: 250, height: 250 }} />
        </View>
      </View>
    );
  };

  _takePhoto = async () => {
    let pickerResult = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    this._handleImagePicked(pickerResult);
  };

  _pickImage = async () => {
    try {
      let pickerResult = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [4, 3],
      });

      console.log({ pickerResult });

      this._handleImagePicked(pickerResult);
    } catch (error) {
      console.error(error);
    }
  };

  _handleImagePicked = async (pickerResult) => {
    try {
      this.setState({ uploading: true });

      if (!pickerResult.cancelled) {
        const uploadUrl = await uploadImageAsync(pickerResult.uri);
        this.setState({ image: uploadUrl });
      }
    } catch (e) {
      console.log(e);
      Alert.alert("Upload", "Upload failed, sorry :(");
    } finally {
      this.setState({ uploading: false });
    }
  };
}

async function uploadImageAsync(uri) {
  // Why are we using XMLHttpRequest? See:
  // https://github.com/expo/expo/issues/2402#issuecomment-443726662
  const blob = await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
      resolve(xhr.response);
    };
    xhr.onerror = function (e) {
      console.log(e);
      reject(new TypeError("Network request failed"));
    };
    xhr.responseType = "blob";
    xhr.open("GET", uri, true);
    xhr.send(null);
  });

  const imagePath = `images/${uuid.v4()}`;
  const fileRef = ref(getStorage(), imagePath);
  await uploadBytes(fileRef, blob);

  // We're done with the blob, close and release it
  blob.close();

  return await getDownloadURL(fileRef);
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  resultText: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: "center",
    marginHorizontal: 15,
  },
  uploadOverlay: {
    backgroundColor: "rgba(0,0,0,0.4)",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    marginTop: 30,
    width: 250,
    borderRadius: 3,
    elevation: 2,
  },
  imageWrapper: {
    borderTopRightRadius: 3,
    borderTopLeftRadius: 3,
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.2,
    shadowOffset: { width: 4, height: 4 },
    shadowRadius: 5,
    overflow: "hidden",
  },
});

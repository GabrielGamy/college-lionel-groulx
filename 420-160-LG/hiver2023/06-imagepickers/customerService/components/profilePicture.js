import React from "react";
import * as ImagePicker from "expo-image-picker";
import { Avatar } from "@react-native-material/core";
import Constants from "../Constants";
import { TouchableOpacity } from "react-native";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { ActivityIndicator, StyleSheet, View, LogBox } from "react-native";
import uuid from "uuid";
import { createUserMetadata } from "../data/userData";

// Firebase sets some timeers for a long period, which will trigger some warnings. Let's turn that off for this example
LogBox.ignoreLogs([`Setting a timer for a long period`]);

export default class ProfilePicture extends React.Component {
  state = {
    image: this.props.userData.profilePicture,
    uploading: false,
  };

  async componentDidMount() {
    await this.getMediaLibraryPermissionsAsync();
  }

  getMediaLibraryPermissionsAsync = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Sorry, we need media library permissions to make this work!");
    }
  };

  render() {
    let { image } = this.state;

    return (
      <>
        <TouchableOpacity onPress={this._pickImage}>
          {!!image && (
            <Avatar
              color={Constants.secondary}
              image={{
                uri: image,
              }}
            />
          )}

          {!image && (
            <Avatar
              color={Constants.secondary}
              image={require("../assets/avatardefault.png")}
            />
          )}
        </TouchableOpacity>
        {this._maybeRenderUploadingOverlay()}
      </>
    );
  }

  _maybeRenderUploadingOverlay = () => {
    if (this.state.uploading) {
      return (
        <View
          style={[
            StyleSheet.absoluteFill,
            {
              backgroundColor: "rgba(0,0,0,0.4)",
              alignItems: "center",
              justifyContent: "center",
            },
          ]}
        >
          <ActivityIndicator color="#fff" animating size="large" />
        </View>
      );
    }
  };

  _pickImage = async () => {
    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    console.log({ pickerResult });

    this._handleImagePicked(pickerResult);
  };

  _saveUserMetada = async (profilePicture) => {
    const userMetadata = {
      ...this.props.userData,
      profilePicture,
    };
    await createUserMetadata(userMetadata);
  };

  _handleImagePicked = async (pickerResult) => {
    try {
      this.setState({ uploading: true });

      if (!pickerResult.cancelled) {
        const uploadUrl = await uploadImageAsync(pickerResult.uri);
        await this._saveUserMetada(uploadUrl);
        this.setState({ image: uploadUrl });
      }
    } catch (e) {
      console.log(e);
      alert("Upload failed, sorry :(");
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

  const fileRef = ref(getStorage(), `profilePictures/${uuid.v4()}`);
  const result = await uploadBytes(fileRef, blob);

  // We're done with the blob, close and release it
  blob.close();

  return await getDownloadURL(fileRef);
}

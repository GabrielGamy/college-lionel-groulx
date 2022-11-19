import * as React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

export default function ProfileImagePicker() {
  const [profileImage, setProfileImage] = React.useState();

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setProfileImage(result.uri);
    } else {
      setProfileImage(null);
    }
  };

  return (
    <View style={styles.container}>
      {profileImage && (
        <View style={styles.profile}>
          <Image style={styles.logo} source={{ uri: profileImage }} />
        </View>
      )}
      {!profileImage && (
        <View style={styles.profile}>
          <AntDesign name="user" size={50} color="white" />
        </View>
      )}
      <TouchableOpacity style={styles.uploadBtn} onPress={pickImage}>
        <Text style={{ color: "white" }}>Upload image</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  profile: {
    height: 120,
    width: 120,
    borderColor: "teal",
    borderWidth: 3,
    borderRadius: 150,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "teal",
  },
  uploadBtn: {
    margin: 10,
    backgroundColor: "teal",
    padding: 8,
    borderRadius: 8,
  },
  logo: {
    height: 128,
    width: 128,
  },
});

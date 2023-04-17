import React, { useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  const signOutUser = async () => {
    // await removeUserInfo();
    props.navigation.navigate("Login");
  };

  return (
    <>
      <View style={styles.signOutContainer}>
        <TouchableOpacity style={styles.signOut} onPress={() => signOutUser()}>
          <Text>Deconnexion</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <Text style={{ textAlign: "center" }}>{"Vous êtes connecté!"}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  signOutContainer: {
    margin: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  signOut: {
    marginBottom: 8,
    padding: 8,
    borderRadius: 6,
    alignItems: "center",
    minWidth: 100,
    backgroundColor: "orange",
  },
  body: {
    margin: 8,
  },
});

export default HomeScreen;

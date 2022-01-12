import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Constants from "../Constants";
import { logoutUser } from "../database/users";

function Settings(props) {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
        <TouchableOpacity
          style={styles.logout}
          onPress={() => {
            logoutUser(() => {
              props.navigation.navigate("Inscription");
            });
          }}
        >
          <Text style={{ color: "white" }}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flex: 1,
  },
  logout: {
    backgroundColor: Constants.primary,
    padding: 10,
    minWidth: 120,
    alignItems: "center",
    borderRadius: 6,
  },
});

export default Settings;

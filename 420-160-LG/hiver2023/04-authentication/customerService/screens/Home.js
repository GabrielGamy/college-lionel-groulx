import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Stack, ListItem, Avatar, Button } from "@react-native-material/core";
import Constants from "../Constants";
import { getAdminData } from "../data/userData";
import { logout } from "../services/userService";

export default function Home({ navigation, route }) {
  const [adminData, setAdminData] = useState({});
  const [userData, setUserData] = useState(route.params.user);
  const [lastMessages, setLastMessages] = useState([]);

  useEffect(() => {
    // const fetchAdminInfo = async () => {
    //   const adminInfo = await getAdminData();
    //   setAdminData(adminInfo);
    // };
    // fetchAdminInfo();
  }, []);

  const signOutUser = async () => {
    await logout();
    navigation.navigate("Login");
  };

  return (
    <Stack spacing={4} style={{ flex: 1 }}>
      <View style={styles.signOutContainer}>
        <TouchableOpacity style={styles.signOut} onPress={() => signOutUser()}>
          <Text>Deconnexion</Text>
        </TouchableOpacity>
      </View>
      <View>
        {lastMessages.map((message) => {
          return (
            <ListItem
              onPress={() => {
                navigation.navigate("Discussions", {
                  recipientData: fromUser(message),
                });
              }}
              leadingMode="avatar"
              leading={
                <Avatar
                  color={Constants.primary}
                  image={require("../assets/avatardefault.png")}
                />
              }
              title={fromUser(message).displayName}
              secondaryText={`${message.content.substring(0, 30)}...`}
            />
          );
        })}
      </View>
      {lastMessages.length === 0 &&
        userData &&
        userData.email !== adminData.email && (
          <View style={{ margin: 32 }}>
            <Button
              title="Débuter la discussion"
              color={Constants.primary}
              tintColor={"white"}
              onPress={() => {
                navigation.navigate("Discussions", {
                  userData,
                  recipientData: adminData,
                });
              }}
            />
          </View>
        )}
    </Stack>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
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
});

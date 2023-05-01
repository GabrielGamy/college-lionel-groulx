import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Stack, ListItem, Avatar, Button } from "@react-native-material/core";
import Constants from "../Constants";
import { logout } from "../services/userService";
import { getAdminData } from "../data/userData";
import { getLastMessages } from "../services/messageService";
import ProfilePicture from "../components/profilePicture";

export default function Home({ navigation, route }) {
  const [userData, setUserData] = useState(route.params.user);
  const [lastMessages, setLastMessages] = useState([]);

  useEffect(() => {
    const fetchLastMessages = async () => {
      if (userData) {
        const messages = await getLastMessages(userData.localId);
        setLastMessages(messages);
      }
    };
    fetchLastMessages();
  }, []);

  const signOutUser = async () => {
    await logout();
    navigation.navigate("Login");
  };

  const goToDiscussions = async () => {
    const adminData = await getAdminData();

    navigation.navigate("Discussions", {
      userData,
      recipientData: adminData,
    });
  };

  return (
    <Stack spacing={4} style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          margin: 8,
        }}
      >
        <ProfilePicture userData={userData} />
        <View style={styles.signOutContainer}>
          <TouchableOpacity
            style={styles.signOut}
            onPress={() => signOutUser()}
          >
            <Text>Deconnexion</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ marginTop: 8 }}>
        {lastMessages.map((message, index) => {
          return (
            <ListItem
              key={index}
              onPress={() => {
                navigation.navigate("Discussions", {
                  userData,
                  recipientData: message.withUser,
                });
              }}
              leadingMode="avatar"
              leading={
                <Avatar
                  color={Constants.primary}
                  image={require("../assets/avatardefault.png")}
                />
              }
              title={message.withUser.email.split("@")[0]}
              secondaryText={`${message.content.substring(0, 30)}...`}
            />
          );
        })}
      </View>
      {lastMessages.length === 0 && userData && userData.role !== "admin" && (
        <View style={{ margin: 32 }}>
          <Button
            title="Débuter la discussion"
            color={Constants.primary}
            tintColor={"white"}
            onPress={() => goToDiscussions()}
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
    backgroundColor: Constants.secondary,
  },
});

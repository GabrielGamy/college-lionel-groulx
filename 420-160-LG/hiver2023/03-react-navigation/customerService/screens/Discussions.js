import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { Stack, TextInput, IconButton } from "@react-native-material/core";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Constants from "../Constants";

export default function Discussions({ navigation, route }) {
  const { withUser } = route.params;
  const [userData, setUserData] = useState({
    localId: "1",
    email: "john.doe@gmail.com",
  });
  const [chatMessage, setChatMessage] = useState();
  const [messages, setMessages] = useState([
    {
      content: "Hello",
      from: {
        id: "1",
        displayName: "User",
      },
    },
    {
      content: "Bonjour",
      from: {
        id: "ExNr00GVAEcfu2oBpouqbsRoIvt2",
        displayName: "Support",
      },
    },
  ]);

  const sendChatMessage = () => {
    console.log("message");
  };

  const renderMessageItem = ({ item }) => {
    if (!userData) return;

    const msgBoxStyle =
      item["from"].id === userData.localId
        ? styles.messageRight
        : styles.messageLeft;

    return (
      <View style={msgBoxStyle}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ fontWeight: "bold" }}>{item.from.displayName} </Text>
          <Text>{new Date(item.date).toLocaleDateString()}</Text>
        </View>
        <Text>{item.content}</Text>
      </View>
    );
  };

  return (
    <Stack spacing={4} style={{ flex: 1 }}>
      <View style={{ flex: 2 }}>
        <FlatList
          data={messages}
          renderItem={renderMessageItem}
          keyExtractor={(item, index) => index}
        />
      </View>
      <View>
        <TextInput
          placeholder="Message"
          multiline={true}
          value={chatMessage}
          onChangeText={(text) => setChatMessage(text)}
          trailing={(props) => (
            <IconButton
              disabled={!chatMessage?.length}
              onPress={sendChatMessage}
              icon={(props) => (
                <MaterialCommunityIcons
                  name="send"
                  size={props.size}
                  color={Constants.primary}
                />
              )}
              {...props}
            />
          )}
        />
      </View>
    </Stack>
  );
}

const styles = StyleSheet.create({
  messageLeft: {
    padding: 16,
    backgroundColor: "#eb7bd1",
    margin: 8,
    marginRight: "25%",
    borderRadius: 8,
  },
  messageRight: {
    padding: 16,
    backgroundColor: "#e9d9e5",
    margin: 8,
    marginLeft: "25%",
    borderRadius: 8,
  },
});

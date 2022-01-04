import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Constants from "../Constants";
import { getCurrentUser } from "../database/users";
import { addMessage, getMessages } from "../database/messages";

function Discussions(props) {
  const [fromUser, setFromUser] = useState({});
  const [messageText, setMessageText] = useState("");
  const [messages, setMessages] = useState([]);
  const [isMessageSent, setIsMessageSent] = useState(false);

  const { toUser } = props.route.params;
  const toUserPhoneInfo = toUser.phoneNumbers[0];

  useEffect(async () => {
    const userData = await getCurrentUser();
    if (!userData) {
      props.navigation.navigate("Inscription");
    } else {
      setFromUser(userData);
    }
  }, []);

  useEffect(() => {
    const fromPhone = fromUser.phone;
    const toPhone = toUserPhoneInfo.number;

    if (fromPhone && toPhone) {
      getMessages(fromPhone, toPhone, (messagesBetweenTwoUsers) => {
        setMessages(messagesBetweenTwoUsers);
        setIsMessageSent(false);
      });
    }
  }, [fromUser, isMessageSent]);

  const sendMessage = () => {
    const newMessage = {
      from: fromUser.phone,
      to: toUserPhoneInfo.number,
      text: messageText,
    };
    addMessage(newMessage);
    setMessageText("");
    setIsMessageSent(true);
  };

  const renderMessageItem = ({ item }) => {
    const color = item.from === fromUser.phone ? "white" : "green";
    return (
      <View>
        <View style={[{ backgroundColor: color }, styles.messageItem]}>
          <Text>{item.text}</Text>
        </View>
      </View>
    );
  };

  return (
    <>
      <View style={styles.messageList}>
        <FlatList
          data={messages}
          renderItem={renderMessageItem}
          keyExtractor={(item) => item.id}
        />
      </View>
      <View style={styles.messageBoxContainer}>
        <TextInput
          numberOfLines={10}
          multiline={true}
          style={styles.messageInput}
          placeholder="Message ..."
          value={messageText}
          onChangeText={(text) => setMessageText(text)}
        />
        <TouchableOpacity onPress={sendMessage}>
          <MaterialIcons name="send" size={34} color={Constants.primary} />
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  messageList: {
    flex: 1,
    padding: 6,
    backgroundColor: "#FAEBD7",
  },
  messageItem: {
    marginVertical: 6,
    marginHorizontal: 8,
    padding: 16,
    borderRadius: 10,
    maxWidth: "80%",
  },
  messageBoxContainer: {
    height: 100,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: 6,
    backgroundColor: "#FAEBD7",
  },
  messageInput: {
    flex: 1,
    height: 50,
    marginVertical: 16,
    marginHorizontal: 12,
    padding: 10,
    borderRadius: 50,
    backgroundColor: "white",
  },
});

export default Discussions;

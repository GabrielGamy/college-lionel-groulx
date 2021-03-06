import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { getLastMessages } from "../database/messages";
import { getCurrentUser } from "../database/users";
import { FontAwesome } from "@expo/vector-icons";
import Constants from "../Constants";

function Inbox(props) {
  const [currentUser, setCurrentUser] = useState();
  const [messages, setMessages] = useState([]);
  const [loadLastMessages, setLoadLastMessages] = useState(false);

  useEffect(async () => {
    const userData = await getCurrentUser();
    if (!userData) {
      props.navigation.navigate("Inscription");
    } else {
      setCurrentUser(userData);
    }
  }, []);

  useEffect(() => {
    const unsubscribe = props.navigation.addListener("focus", () => {
      setLoadLastMessages(true);
    });
    return unsubscribe;
  }, [props.navigation]);

  useEffect(() => {
    if (currentUser) {
      getLastMessages(currentUser.phone, (data) => {
        setMessages(data);
        setLoadLastMessages(false);
      });
    }
  }, [currentUser, loadLastMessages]);

  const renderMessages = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.messageItem}
        onPress={() => {
          props.navigation.navigate("Discussions", {
            toUser: {
              firstName: item.name.to.split(" ")[0],
              lastName: item.name.to.split(" ")[1],
              phoneNumbers: [
                {
                  number: item.phone,
                },
              ],
            },
          });
        }}
      >
        <View style={styles.messageIcon}>
          <FontAwesome name="user" size={30} color={Constants.primary} />
        </View>
        <View style={{ marginHorizontal: 10 }}>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>
            {item.name.to}
          </Text>
          <Text>{item.message}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: "bold", margin: 16 }}>
        Inbox
      </Text>
      <FlatList
        data={messages}
        renderItem={renderMessages}
        keyExtractor={(item) => item.phone}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  messageItem: {
    marginVertical: 8,
    padding: 8,
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "black",
    flexDirection: "row",
    alignItems: "center",
  },
  messageIcon: {
    height: 50,
    width: 50,
    borderWidth: 1,
    borderColor: Constants.primary,
    borderRadius: 300,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Inbox;

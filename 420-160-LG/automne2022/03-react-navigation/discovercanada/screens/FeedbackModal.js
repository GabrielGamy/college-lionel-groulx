import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableNativeFeedback,
  Modal,
  Alert,
} from "react-native";
import { Button, Text, TextInput } from "@react-native-material/core";
import { MaterialIcons } from "@expo/vector-icons";
import constants from "../constants";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import i18n from "../data/languages";
import { firestoreDb } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

const FeedbackModal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const openFeedbackModal = () => {
    setModalVisible(true);
  };

  const closeFeedbackModal = () => {
    setModalVisible(false);
  };

  const sendFeedback = async () => {
    if (email.length > 0 && message.length > 0) {
      try {
        await addDoc(collection(firestoreDb, "feedbacks"), { email, message });
        Alert.alert("Message", i18n.t("thankyoufeedback"));
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      return;
    }
    throw new Error("Invalid Email/Message");
  };

  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View
            style={{
              flexDirection: "row",
              marginHorizontal: 16,
            }}
          >
            <Button
              color={constants.primaryColor}
              variant="outlined"
              title={i18n.t("close")}
              onPress={closeFeedbackModal}
            />
          </View>
          <TextInput
            label={i18n.t("email")}
            style={styles.input}
            color={constants.primaryColor}
            variant="outlined"
            value={email}
            onChangeText={(text) => setEmail(text)}
            leading={(props) => <Icon name="email" {...props} />}
          />
          <TextInput
            label="Message"
            multiline={true}
            numberOfLines={10}
            style={styles.input}
            color={constants.primaryColor}
            variant="outlined"
            value={message}
            onChangeText={(text) => setMessage(text)}
            leading={(props) => <Icon name="message" {...props} />}
          />
          <View
            style={{
              flexDirection: "row",
              width: 200,
              justifyContent: "space-around",
            }}
          >
            <Button
              color={constants.primaryColor}
              variant="outlined"
              title={i18n.t("cancel")}
              onPress={closeFeedbackModal}
              style={{ marginHorizontal: 8 }}
            />
            <Button
              color={constants.primaryColor}
              title={i18n.t("send")}
              onPress={sendFeedback}
            />
          </View>
        </View>
      </Modal>
      <TouchableNativeFeedback onPress={openFeedbackModal}>
        <View style={styles.feedbackButton}>
          <MaterialIcons
            name="feedback"
            size={24}
            color={constants.primaryColor}
          />
          <Text style={{ color: constants.primaryColor }}>Feedback</Text>
        </View>
      </TouchableNativeFeedback>
    </>
  );
};

const styles = StyleSheet.create({
  feedbackButton: {
    padding: 8,
    flexDirection: "row",
  },
  centeredView: {
    flex: 1,
    backgroundColor: "white",
    marginTop: 50,
    paddingTop: 16,
  },
  modalView: {
    backgroundColor: "white",
    padding: 16,
  },
  input: {
    padding: 10,
  },
});

export default FeedbackModal;

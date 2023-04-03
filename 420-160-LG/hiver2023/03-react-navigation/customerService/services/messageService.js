import { db } from "../config/firebaseConfig";
import { ref, push, set, child, get, remove, onValue } from "firebase/database";

const DB_COLLECTION = "customerService";

export const sendMessage = async (userData, recipientData, messageData) => {
  try {
    const messages = await getMessages(userData.id, recipientData.id);

    messages.push({
      ...messageData,
      date: new Date().toISOString(),
    });

    const messages_ref = ref(
      db,
      `${DB_COLLECTION}/${userData.id}/conversations/${recipientData.id}`
    );

    set(messages_ref, messages);

    return messages;
  } catch (e) {
    console.error("Error sendMessage() : ", e);
  }
};

export const getMessages = async (userId, recipientId) => {
  try {
    const db_ref = ref(db);
    const snapshot = await get(
      child(db_ref, `${DB_COLLECTION}/${userId}/conversations/${recipientId}`)
    );

    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      return [];
    }
  } catch (error) {
    console.error("Error getMessages() :", error);
  }

  return [];
};

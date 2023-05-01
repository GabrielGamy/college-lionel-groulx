import { db } from "../config/firebaseConfig";
import { ref, set, child, get } from "firebase/database";

const DB_COLLECTION = "DISCUSSIONS";

export const sendMessage = async (userData, recipientData, messageData) => {
  try {
    const messages = await getMessages(userData.localId, recipientData.localId);

    messages.push({
      ...messageData,
      date: new Date().toISOString(),
    });

    const path = `${DB_COLLECTION}/${userData.localId}/conversations/${recipientData.localId}`;
    const messages_ref = ref(db, path);
    set(messages_ref, messages);

    return messages;
  } catch (e) {
    console.error("Error sendMessage() : ", e);
  }
};

export const getMessages = async (userId, recipientId) => {
  try {
    const db_ref = ref(db);
    const path = `${DB_COLLECTION}/${userId}/conversations/${recipientId}`;
    const snapshot = await get(child(db_ref, path));

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

export const getLastMessages = async (userId) => {
  const db_ref = ref(db);
  const path = `${DB_COLLECTION}/${userId}/conversations`;
  const snapshot = await get(child(db_ref, path));
  const lastMessages = [];

  if (snapshot.exists()) {
    const conversations = snapshot.val();

    Object.keys(conversations).forEach((recipientId) => {
      const allMessages = conversations[recipientId];
      const lastMessage = allMessages[allMessages.length - 1];

      if (lastMessage.from.localId === recipientId) {
        lastMessages.push({
          content: lastMessage.content,
          withUser: lastMessage.from,
        });
      } else {
        lastMessages.push({
          content: lastMessage.content,
          withUser: lastMessage.to,
        });
      }
    });
  }

  return lastMessages;
};

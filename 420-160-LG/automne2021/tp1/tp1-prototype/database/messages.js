import { database } from "./firebase";
import { ref, set, onValue, push, child } from "firebase/database";

const addMessage = (messageData) => {
  messageData.from = formatPhone(messageData.from);
  messageData.to = formatPhone(messageData.to);

  const newMessage = {
    id: push(child(ref(database), "messages")).key,
    creationDate: new Date().toISOString(),
    ...messageData,
  };

  set(ref(database, "messages/" + newMessage.id), newMessage);
};

const getMessages = (fromUserPhone, toUserPhone, callback) => {
  const messagesRef = ref(database, "messages/");

  onValue(
    messagesRef,
    (snapshot) => {
      const messageObjList = snapshot.val() || {};
      const messagesBetweenTwoUsers = [];

      Object.keys(messageObjList).forEach((messageId) => {
        const theMessage = messageObjList[messageId];

        // Obtenir les messages envoyés avec ce contact
        if (
          areSamePhones(theMessage.from, fromUserPhone) &&
          areSamePhones(theMessage.to, toUserPhone)
        ) {
          messagesBetweenTwoUsers.push(theMessage);
        }

        // Obtenir les messages reçus par ce contact
        if (
          areSamePhones(theMessage.from, toUserPhone) &&
          areSamePhones(theMessage.to, fromUserPhone)
        ) {
          messagesBetweenTwoUsers.push(theMessage);
        }
      });

      callback(messagesBetweenTwoUsers);
    },
    { onlyOnce: true }
  );
};

const getMessagesAll = (userPhone, callback) => {
  const messagesRef = ref(database, "messages/");

  onValue(
    messagesRef,
    (snapshot) => {
      const messageObjList = snapshot.val() || {};
      let messages = [];

      Object.keys(messageObjList).forEach((messageId) => {
        const theMessage = messageObjList[messageId];

        if (formatPhone(theMessage.to) === formatPhone(userPhone)) {
          messages = messages.filter(
            (m) => formatPhone(m.from) != formatPhone(theMessage.from)
          );
          messages.push(theMessage);
        }
      });

      callback(messages);
    },
    { onlyOnce: true }
  );
};

const formatPhone = (phone) => {
  return phone
    .replace("(", "")
    .replace(")", "")
    .replace("-", "")
    .replace(" ", "");
};

const areSamePhones = (firstPhone, secondPhone) => {
  return formatPhone(firstPhone) === formatPhone(secondPhone);
};

export { addMessage, getMessages, getMessagesAll };

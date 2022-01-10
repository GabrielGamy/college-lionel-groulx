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

  addLastMessage(
    messageData.to,
    messageData.from,
    messageData.name.from,
    messageData.name.to,
    messageData.text
  );

  addLastMessage(
    messageData.from,
    messageData.to,
    messageData.name.to,
    messageData.name.from,
    messageData.text
  );

  set(ref(database, "messages/" + newMessage.id), newMessage);
};

const addLastMessage = (
  fromPhone,
  toPhone,
  fromFullName,
  toFullName,
  message
) => {
  fromPhone = formatPhone(fromPhone);
  toPhone = formatPhone(toPhone);

  const newMessage = {
    message,
    name: {
      from: fromFullName,
      to: toFullName,
    },
    creationDate: new Date().toISOString(),
  };

  set(ref(database, `lastMessages/${toPhone}/${fromPhone}`), newMessage);
};

const getLastMessages = (toPhone, callback) => {
  toPhone = formatPhone(toPhone);
  const messagesRef = ref(database, `lastMessages/${toPhone}/`);

  onValue(
    messagesRef,
    (snapshot) => {
      const messageObjList = snapshot.val() || {};
      let messages = [];

      Object.keys(messageObjList).forEach((phone) => {
        const theMessage = { ...messageObjList[phone], phone };
        messages.push(theMessage);
      });

      callback(messages);
    },
    { onlyOnce: true }
  );
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

export {
  addMessage,
  addLastMessage,
  getMessages,
  getLastMessages,
  getMessagesAll,
};

import { database } from "./firebase";
import { ref, set, onValue, push, child } from "firebase/database";

const addMessage = (messageData) => {
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
          theMessage.from === fromUserPhone &&
          theMessage.to === toUserPhone
        ) {
          messagesBetweenTwoUsers.push(theMessage);
        }

        // Obtenir les messages reçus par ce contact
        if (
          theMessage.from === toUserPhone &&
          theMessage.to === fromUserPhone
        ) {
          messagesBetweenTwoUsers.push(theMessage);
        }
      });

      callback(messagesBetweenTwoUsers);
    },
    { onlyOnce: true }
  );
};

export { addMessage, getMessages };

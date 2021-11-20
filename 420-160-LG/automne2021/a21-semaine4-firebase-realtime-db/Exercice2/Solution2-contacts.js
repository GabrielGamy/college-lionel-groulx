/**
 * Exercice 2
 * Obtenir et afficher les contacts sauvegardés dans la base de données
 */
import firebase from "./firebase";

const createContact = (fullName, phoneNumber) => {
  const newContact = {
    id: firebase.database().ref().child("contacts").push().key,
    fullName,
    phoneNumber,
    creationDate: new Date().toISOString(),
  };

  firebase
    .database()
    .ref("contacts/" + newContact.id)
    .set(newContact);
};

const getContacts = (callback) => {
  const dbContactsRef = firebase.database().ref("contacts/");
  dbContactsRef.on("value", (snapshot) => {
    const contactList = snapshot.val() || {};
    callback(contactList);
  });
  return dbContactsRef;
};

export { createContact, getContacts };

/**
 * Exercice 3
 * Permettre la suppression d'un contact dans firebase
 */
import AsyncStorage from "@react-native-async-storage/async-storage";

/**
 * Ajouter le nouveau contact dans la liste des contacts
 * @param {*} fullName
 * @param {*} phoneNumber
 */
const createContact = async (fullName, phoneNumber) => {
  try {
    const contacts = await getContacts();

    const newContact = {
      id: new Date().getUTCMilliseconds(),
      fullName,
      phoneNumber,
      creationDate: new Date().toISOString(),
    };
    contacts.push(newContact);

    await AsyncStorage.setItem("CONTACT_LIST", JSON.stringify(contacts));
  } catch (e) {
    console.log("CreateConact Error: ", e);
  }
};

/**
 * Obtention des contacts existants ou une liste vide si aucun contact n'existe.
 * @returns liste des contactes
 */
const getContacts = async () => {
  let contacts = [];
  try {
    const jsonValue = await AsyncStorage.getItem("CONTACT_LIST");
    contacts = jsonValue != null ? JSON.parse(jsonValue) : [];
    console.log("GetContacts : ", contacts);
  } catch (e) {
    console.log("GetContacts Error: ", e);
  } finally {
    return contacts;
  }
};

export { createContact, getContacts };

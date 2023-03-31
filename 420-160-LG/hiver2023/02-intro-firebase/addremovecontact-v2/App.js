import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  Alert,
  Button,
  FlatList,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import {
  addContact,
  getContacts,
  removeContact,
} from "./services/contactService";

export default function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    async function fetchContacts() {
      const dbContacts = await getContacts();
      setContacts(dbContacts);
    }
    fetchContacts();
  }, []);

  const add = async () => {
    if (firstName.length && lastName.length) {
      const id = await addContact(firstName, lastName);
      const newContact = {
        id,
        firstName,
        lastName,
      };
      setContacts([newContact, ...contacts]);
    }
  };

  const remove = async (id) => {
    Alert.alert("Delete Contact", "Are you sure?", [
      {
        text: "No",
        style: "cancel",
        onPress: () => {},
      },
      {
        text: "Yes",
        style: "default",
        onPress: async () => {
          await removeContact(id);
          const newContacts = contacts.filter((c) => c.id !== id);
          setContacts(newContacts);
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text
          style={{
            fontSize: 20,
            color: "teal",
            marginVertical: 16,
            fontWeight: "bold",
          }}
        >
          Add or Remove Contact
        </Text>
        <TextInput
          style={styles.input}
          placeholder="First Name"
          value={firstName}
          onChangeText={(firstName) => setFirstName(firstName)}
        />
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          value={lastName}
          onChangeText={(lastName) => setLastName(lastName)}
        />
        <Button title="Add Contact" color={"teal"} onPress={add} />
      </View>

      <FlatList
        contentContainerStyle={{
          marginHorizontal: 8,
          marginVertical: 32,
        }}
        data={contacts}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={styles.contactitem}
              onPress={() => {
                remove(item.id);
              }}
            >
              <Text>
                {item.firstName} {item.lastName}
              </Text>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "ios" ? 64 : 32,
    flex: 1,
    backgroundColor: "#fff",
  },
  input: {
    width: 200,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: "teal",
    borderRadius: 8,
  },
  contactitem: {
    padding: 4,
    marginHorizontal: 4,
    marginVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "teal",
  },
});

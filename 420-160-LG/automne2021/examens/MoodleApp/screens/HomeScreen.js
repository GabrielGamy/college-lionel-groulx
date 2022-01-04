/**
 * Exercice 4
 * Afficher un message d'alerte avant la suppression du contact
 */
import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  Alert,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Constants from "../constants";
import {
  createStudent,
  getStudents,
  deleteStudent,
} from "../database/students";
import { Ionicons } from "@expo/vector-icons";

export default function HomeScreen(props) {
  const [fullName, setFullName] = useState("");
  const [notes, setNotes] = useState("");
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const subscription = getStudents((data) => {
      let results = [];
      Object.keys(data).forEach((item) => {
        results.push(data[item]);
      });
      setStudents(results);
    });

    return () => {
      /**
       * Detacher les callbacks
       * https://firebase.google.com/docs/database/admin/retrieve-data#section-detaching-callbacks
       */
      subscription.off();
    };
  }, []);

  const addStudent = () => {
    if (fullName.length === 0) {
      Alert.alert("Erreur", "Le nom du contact est invalide!");
      return;
    }

    const note = Number(notes);

    if (notes.length === 0 || isNaN(note)) {
      Alert.alert("Erreur", "Le numero du contact est invalide!");
      return;
    }

    createStudent(fullName, notes);

    Alert.alert("Ajout", "La note est ajoutée dans moodle!");
  };

  const askBeforeDelete = (contactid) => {
    Alert.alert("Suppression", "Voulez-vous vraiment supprimer la note ?", [
      {
        text: "Annuler",
      },
      {
        text: "Oui",
        onPress: () => {
          deleteStudent(contactid);
        },
      },
    ]);
  };

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() =>
          props.navigation.navigate("Details", {
            fullName: item.fullName,
            notes: item.note,
          })
        }
        style={styles.contactItem}
      >
        <View>
          <Ionicons name="person-circle" size={36} color={Constants.primary} />
        </View>
        <View style={{ flexDirection: "column", flex: 1 }}>
          <Text>{item.fullName}</Text>
          <Text>{item.note}</Text>
        </View>
        <TouchableOpacity onPress={() => askBeforeDelete(item.id)}>
          <Ionicons name="trash" size={26} color={Constants.primary} />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <View>
        <Text style={styles.ajouterText}>
          Ajouter une note pour un étudiant
        </Text>
      </View>
      <View>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setFullName(text)}
          value={fullName}
          placeholder="Saisir le nom complet"
        />
      </View>
      <View>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setNotes(text)}
          value={notes}
          placeholder="Saisir la note"
          keyboardType="numeric"
        />
      </View>
      <View style={styles.addBtn}>
        <Button
          title="Ajouter Note"
          color={Constants.primary}
          onPress={addStudent}
        />
      </View>
      <FlatList
        data={students}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </>
  );
}

const styles = StyleSheet.create({
  ajouterText: {
    paddingTop: 16,
    textAlign: "center",
    fontSize: 18,
    color: Constants.primary,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  addBtn: {
    margin: 12,
  },
  contactItem: {
    flexDirection: "row",
    alignItems: "center",
    margin: 8,
    backgroundColor: "#e6e6ff",
    padding: 8,
    borderRadius: 6,
  },
});

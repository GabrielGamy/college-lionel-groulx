import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CoursEtudiant = [
  "Programmation orienté objet",
  "Programmation web",
  "Programmation d'applications mobile 1",
];

class Etudiant extends React.Component {
  render() {
    return (
      <View style={styles.student}>
        {CoursEtudiant.map(function (item, index) {
          return <Text key={index}>{index + 1 + " - " + item}</Text>;
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  student: {
    marginBottom: 16,
  },
});

export default Etudiant;

import React from "react";
import { View, Text, StyleSheet } from "react-native";

function DetailsScreen({ route, navigation }) {
  const { fullName } = route.params;
  const { notes } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.description}>
        <Text>Nom Complet:</Text>
        <Text>{fullName}</Text>
      </View>
      <View style={styles.description}>
        <Text>Notes:</Text>
        <Text>{notes}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  description: {
    margin: 8,
  },
});

export default DetailsScreen;

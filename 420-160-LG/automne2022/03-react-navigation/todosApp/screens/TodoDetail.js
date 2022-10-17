import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function TodoDetail({ route }) {
  const { item, onDeleteTodo } = route.params;
  
  return (
    <View style={styles.container}>
      <Text>{item.value}</Text>
      <View style={styles.button}>
        <Button title="Delete" color="red" onPress={() => onDeleteTodo(item.id)} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 8,
    paddingTop: 16
  },
  button: {
    marginVertical: 16
  }
});
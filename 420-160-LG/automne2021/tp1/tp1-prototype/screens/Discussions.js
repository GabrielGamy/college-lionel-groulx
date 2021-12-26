import React from "react";
import { View, Text, StyleSheet } from "react-native";

function Discussions(props) {
  const { contactInfo } = props.route.params;
  const phoneNumberInfo = contactInfo.phoneNumbers[0];
  return (
    <View style={styles.container}>
      <Text>{contactInfo.firstName}</Text>
      <Text>{phoneNumberInfo.number}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Discussions;

import React from "react";
import { View, Text } from "react-native";

const VilleScreen = (props) => {
  return (
    <View>
      <Text>{props.route.params.ville}</Text>
    </View>
  )
};

export default VilleScreen;
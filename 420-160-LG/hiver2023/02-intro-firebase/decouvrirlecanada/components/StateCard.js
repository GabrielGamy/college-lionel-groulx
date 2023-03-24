import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { HStack, Banner, Button } from "@react-native-material/core";
import { i18n } from "../languages";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default class StateCard extends React.Component {
  renderWeather = () => {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginRight: 8,
        }}
      >
        <Text style={{ fontSize: "large", marginHorizontal: 4 }}>-3</Text>
        <MaterialCommunityIcons name="weather-cloudy" size={24} color="black" />
      </View>
    );
  };

  render() {
    return (
      <View style={styles.stateItem}>
        <Image
          source={{ uri: this.props.item.image }}
          style={{ height: "70%", width: "100%" }}
        />
        <Banner
          text={i18n.t(this.props.item.slug)}
          textStyle={{ fontSize: 20 }}
          buttons={
            <HStack>
              {/*this.renderWeather()*/}
              <Button
                key="learn-more"
                variant="text"
                title={i18n.t("en_savoir_plus")}
                compact
              />
            </HStack>
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  stateItem: {
    height: 280,
    backgroundColor: "#F8F8FF",
    padding: 8,
    paddingBottom: 20,
    justifyContent: "space-between",
    marginVertical: 8,
  },
});

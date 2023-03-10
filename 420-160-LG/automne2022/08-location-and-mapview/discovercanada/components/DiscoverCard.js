import React from "react";
import { StyleSheet, Image, View } from "react-native";
import {
  Surface,
  Pressable,
  HStack,
  Banner,
  Button,
  Text,
} from "@react-native-material/core";
import i18n from "../data/languages";
import constants from "../constants";

export default class DiscoverCard extends React.Component {
  navigateTo = () => {
    if (this.props.navigateTo) {
      this.props.navigateTo();
    }
  };

  render() {
    const { item, useViewMapText } = this.props;
    const name = i18n.t(item.name).includes("missing")
      ? item.name
      : i18n.t(item.name);

    return (
      <Surface elevation={2} category="medium" style={styles.wrapper}>
        <Pressable style={styles.item}>
          <Image source={{ uri: item.image }} style={styles.image} />
          <Banner
            text={name}
            textStyle={{ fontSize: 16 }}
            buttons={
              <HStack spacing={2}>
                <Button
                  key="learn-more"
                  variant="text"
                  title={i18n.t(useViewMapText ? "viewMap" : "learn_more")}
                  color={constants.primaryColor}
                  compact
                  onPress={() => this.navigateTo()}
                />
              </HStack>
            }
          />
        </Pressable>
        {this.props.description && (
          <View style={styles.itemDescription}>
            <Text variant="h7">{this.props.description}</Text>
          </View>
        )}
      </Surface>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: 16,
    marginVertical: 8,
    minWidth: 250,
  },
  item: {
    paddingHorizontal: 2,
    marginBottom: 6,
    flexDirection: "column",
    justifyContent: "space-between",
    height: 280,
  },
  itemDescription: {
    paddingHorizontal: 8,
    marginBottom: 6,
  },
  image: {
    width: "100%",
    flex: 2,
  },
});

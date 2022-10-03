import React from "react";
import { StyleSheet, Image, Linking, Alert } from "react-native";
import {
  Surface,
  Pressable,
  HStack,
  Banner,
  Button,
} from "@react-native-material/core";
import i18n from "../data/languages";

export default class DiscoverCard extends React.Component {
  openWebsite = async (websiteUrl) => {
    const supported = await Linking.canOpenURL(websiteUrl);

    if (supported) {
      await Linking.openURL(websiteUrl);
    } else {
      Alert.alert(`Don't know how to open this URL: ${websiteUrl}`);
    }
  };

  render() {
    const item = this.props.item;
    return (
      <Surface elevation={2} category="medium" style={styles.wrapper}>
        <Pressable style={styles.item}>
          <Image source={{ uri: item.image }} style={styles.image} />
          <Banner
            text={i18n.t(item.name)}
            textStyle={{ fontSize: 16 }}
            buttons={
              <HStack spacing={2}>
                <Button
                  key="learn-more"
                  variant="text"
                  title={i18n.t("learn_more")}
                  color="#D80621"
                  compact
                  onPress={() => this.openWebsite(item.website)}
                />
              </HStack>
            }
          />
        </Pressable>
      </Surface>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: 16,
    marginVertical: 8,
  },
  item: {
    paddingHorizontal: 2,
    marginBottom: 6,
    flexDirection: "column",
    justifyContent: "space-between",
    height: 280,
  },
  image: {
    width: "100%",
    flex: 2,
  },
});

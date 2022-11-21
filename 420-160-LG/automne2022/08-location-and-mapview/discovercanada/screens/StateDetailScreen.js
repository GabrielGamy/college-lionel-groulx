import React, { useEffect } from "react";
import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  Linking,
  Alert,
} from "react-native";
import { HStack, Banner, Button, Text } from "@react-native-material/core";
import i18n from "../data/languages";
import constants from "../constants";
import DiscoverCard from "../components/DiscoverCard";

const StateDetailScreen = ({ route, navigation }) => {
  const { state } = route.params;

  useEffect(() => {
    navigation.setOptions({ title: state.name });
  }, []);

  const renderStateItem = (item) => {
    return (
      <DiscoverCard
        key={item.name}
        item={item}
        navigateTo={() =>
          navigation.navigate("City", {
            city: item,
          })
        }
      />
    );
  };

  const openWebsite = async (websiteUrl) => {
    const supported = await Linking.canOpenURL(websiteUrl);

    if (supported) {
      await Linking.openURL(websiteUrl);
    } else {
      Alert.alert(`Don't know how to open this URL: ${websiteUrl}`);
    }
  };

  return (
    <ScrollView>
      <Image style={styles.banner} source={{ uri: state.image }} />
      <Banner
        text={state.name}
        textStyle={{ fontSize: 16 }}
        buttons={
          <HStack>
            <Button
              key="website"
              variant="text"
              title={`${i18n.t("visitWebsite")}`}
              color={constants.primaryColor}
              compact
              onPress={() => openWebsite(state.website)}
            />
          </HStack>
        }
      />
      {state.cities && state.cities.length > 0 && (
        <View style={styles.screen}>
          <Text variant="h5" style={styles.screenHeaderText}>
            {i18n.t("cities")}
          </Text>
          {state.cities.map((item) => {
            return renderStateItem(item);
          })}
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  banner: {
    height: 220,
    width: "100%",
  },
  screen: {
    padding: 8,
  },
  screenHeaderText: {
    paddingVertical: 16,
    textAlign: "center",
  },
});

export default StateDetailScreen;

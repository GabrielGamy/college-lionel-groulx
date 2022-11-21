import React, { useEffect } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Image,
  Linking,
  Alert,
} from "react-native";
import { HStack, Banner, Button, Text } from "@react-native-material/core";
import i18n from "../data/languages";
import constants from "../constants";
import DiscoverCard from "../components/DiscoverCard";

const CityScreen = ({ route, navigation }) => {
  const { city } = route.params;
  let lang = i18n.locale.split("-")[0];

  useEffect(() => {
    navigation.setOptions({ title: city.name });
    lang = lang !== "en" && lang !== "fr" ? "fr" : lang;
  }, []);

  const renderPlaceItem = (item) => {
    return (
      <DiscoverCard
        key={item.name}
        item={item}
        description={item.description[lang]}
        navigateTo={() =>
          navigation.navigate("Map", {
            name: item.name,
            description: item.description[lang],
            address: item.address,
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
      <Image style={styles.banner} source={{ uri: city.image }} />
      <Banner
        text={city.name}
        textStyle={{ fontSize: 16 }}
        buttons={
          <HStack>
            <Button
              key="website"
              variant="text"
              title={`${i18n.t("visitWebsite")}`}
              color={constants.primaryColor}
              compact
              onPress={() => openWebsite(city.website)}
            />
          </HStack>
        }
      />
      {city.places && city.places.length > 0 && (
        <View style={styles.screen}>
          <Text variant="h5" style={styles.screenHeaderText}>
            {i18n.t("attractions")}
          </Text>
          {city.places.map((item) => {
            return renderPlaceItem(item);
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

export default CityScreen;

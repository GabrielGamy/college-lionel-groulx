import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { Text } from "@react-native-material/core";
import DiscoverCard from "../components/DiscoverCard";
import i18n from "../data/languages";

import { get, ref, child, getDatabase } from "firebase/database";
import { db } from "../firebase";
import FeedbackModal from "./FeedbackModal";
import { ScrollView } from "react-native-gesture-handler";

const StateScreen = ({ navigation }) => {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    getStates();
  }, []);

  useEffect(() => {
    getCities(states);
  }, [states]);

  const getStates = () => {
    const dbRef = ref(getDatabase());
    get(child(dbRef, "states/"))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setStates(snapshot.val());
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const getCities = (states) => {
    const allCities = [];

    states.forEach((state) => {
      if (state.cities && state.cities.length) {
        state.cities.forEach((city) => {
          allCities.push(city);
        });
      }
    });

    allCities.sort((a, b) =>
      a.name !== b.name ? (a.name < b.name ? -1 : 1) : 0
    );

    setCities(allCities);
  };

  const renderStateItem = ({ item }) => {
    return (
      <DiscoverCard
        item={item}
        navigateTo={() =>
          navigation.navigate("StateDetail", {
            state: item,
          })
        }
      />
    );
  };

  const renderCityItem = ({ item }) => {
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

  return (
    <ScrollView style={styles.screen}>
      <Text variant="h5" style={styles.screenHeaderText}>
        {i18n.t("cities")}
      </Text>
      <FlatList
        data={cities}
        horizontal={true}
        keyExtractor={(item) => item.name}
        renderItem={renderCityItem}
        style={{ flex: 1 }}
      />
      <Text variant="h5" style={styles.screenHeaderText}>
        {i18n.t("states")}
      </Text>
      <FlatList
        data={states}
        keyExtractor={(item) => item.name}
        renderItem={renderStateItem}
        style={{ flex: 1 }}
      />
      <FeedbackModal />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 8,
    flex: 1,
  },
  screenHeaderText: {
    paddingVertical: 16,
    textAlign: "center",
  },
  feedbackButton: {
    padding: 8,
    flexDirection: "row",
  },
});

export default StateScreen;

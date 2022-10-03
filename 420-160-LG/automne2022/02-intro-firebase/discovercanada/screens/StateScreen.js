import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { Text } from "@react-native-material/core";
import DiscoverCard from "../components/DiscoverCard";
import i18n from "../data/languages";

import { get, ref, child, getDatabase } from "firebase/database";
import { db } from "../firebase";

const StateScreen = () => {
  const [states, setStates] = useState([]);

  useEffect(() => {
    getStates();
  }, []);

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

  const renderStateItem = ({ item }) => {
    return <DiscoverCard item={item} />;
  };

  return (
    <View style={styles.screen}>
      <Text variant="h5" style={styles.screenHeaderText}>
        {i18n.t("states")}
      </Text>
      <FlatList
        data={states}
        keyExtractor={(item) => item.name}
        renderItem={renderStateItem}
        style={{ flex: 1 }}
      />
    </View>
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
});

export default StateScreen;

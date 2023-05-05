import React, { useEffect, useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import i18n from "../data/languages";

const MapScreen = ({ route }) => {
  const { name, address, description } = route.params;
  const [coords, setCoords] = useState();
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg(i18n.t("locationRequired"));
      } else {
        try {
          // Location.setGoogleApiKey("/** YOUR_API_KEY */");
          const addressCoords = await Location.geocodeAsync(address);
          setCoords(addressCoords[0]);
          setErrorMsg("");
        } catch (error) {
          setErrorMsg(error.message);
        }
      }
    })();
  }, [address]);

  if (errorMsg.length) {
    Alert.alert("Message", errorMsg, [
      {
        text: "Ok",
        onPress: () => {
          setErrorMsg("");
        },
      },
    ]);
  }

  // La position actuelle du client ou initiale sur la carte.
  const region = {
    latitude: coords?.latitude || 0,
    longitude: coords?.longitude || 0,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  return (
    <View style={styles.mapContainer}>
      <MapView style={styles.mapView} region={region} minZoomLevel={16}>
        {coords && (
          <Marker coordinate={coords} title={name} description={description} />
        )}
      </MapView>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  mapContainer: {
    flex: 1,
    height: "100%",
    width: "100%",
  },
  mapView: {
    flex: 1,
  },
});

import React, { useEffect, useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

const MapPreview = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const [userPosition, setUserPosition] = useState();

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg(
          "Oups! La permission de localisation est requise pour le bon fonctionnement de la carte."
        );
      } else {
        try {
          const position = await Location.getCurrentPositionAsync({
            timeInterval: 5000,
          });
          setUserPosition(position.coords);
        } catch (error) {
          setErrorMsg(error.message);
        }
      }
    })();
  }, []);

  if (errorMsg.length) {
    Alert.alert("Message", errorMsg, [
      {
        text: "Okay",
        onPress: () => {
          setErrorMsg("");
        },
      },
    ]);
  }

  const onChangePosition = (event) => {
    const coords = event.nativeEvent.coordinate;
    setUserPosition((position) => ({
      ...position,
      latitude: coords.latitude,
      longitude: coords.longitude,
    }));
  };

  // La position initiale sur la carte.
  const initialRegion = {
    latitude: 45.6420493,
    longitude: -73.8435778,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  // La position actuelle du client ou initiale sur la carte.
  const region = {
    ...initialRegion,
    latitude: userPosition?.latitude || initialRegion.latitude,
    longitude: userPosition?.longitude || initialRegion.longitude,
  };

  return (
    <View style={styles.mapContainer}>
      <MapView
        style={styles.mapView}
        initialRegion={initialRegion}
        region={region}
        showsUserLocation={true}
        onPress={onChangePosition}
      >
        {userPosition && (
          <Marker
            coordinate={userPosition}
            title={"Votre position"}
            description={"Ce point represente votre positiona actuelle"}
          />
        )}
      </MapView>
    </View>
  );
};

export default MapPreview;

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

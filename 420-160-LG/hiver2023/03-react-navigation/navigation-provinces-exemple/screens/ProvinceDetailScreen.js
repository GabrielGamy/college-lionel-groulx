import React from 'react';
import { View, Button } from 'react-native';

const ProvinceDetailScreen = (props) => {
  return (
    <View style={{ justifyContent: 'center', flex: 1, margin: 16 }}>
      <Button
        title="Montreal"
        color="#CC0000"
        onPress={() => {
          props.navigation.navigate('Ville', {
            ville: "Montreal"
          });
        }}
      />
      <Button
        title="Quebec"
        color="#CC0000"
        onPress={() => {
          props.navigation.navigate('Ville', {
            ville: "Quebec"
          });
        }}
      />
      <Button
        title="Sherbrooke"
        color="#CC0000"
        onPress={() => {
          props.navigation.navigate('Ville', {
            ville: "Sherbrooke"
          });
        }}
      />
    </View>
  );
};

export default ProvinceDetailScreen;

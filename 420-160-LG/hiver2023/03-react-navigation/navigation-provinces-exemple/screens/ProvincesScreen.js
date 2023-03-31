import React from 'react';
import { View, Text, Button } from 'react-native';

const ProvincesScreen = (props) => {
  return (
    <View style={{ justifyContent: 'center', flex: 1, margin: 16 }}>
      <Button title="Quebec" color="#CC0000" onPress={() => {
        props.navigation.navigate('ProvinceDetail')
      }} />
    </View>
  );
};

export default ProvincesScreen;

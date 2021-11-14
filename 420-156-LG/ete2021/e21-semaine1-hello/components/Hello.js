import React from 'react';
import { View, Text } from 'react-native';

function Hello(props) {
    return (
      <View>
        <Text>Bonjour {props.who}</Text>
        <Text>Et aussi {props.other}</Text>
      </View>
    )  
}

export default Hello;
import React from 'react';
import { Platform } from "react-native"
import { HStack, Text } from 'native-base';

export default class Header extends React.Component {
  render() {
    const paddingTop = Platform.OS === "ios" ? 10 : 6;
    return (
      <HStack bg="green.700" p={4} pt={paddingTop}>
        <Text color="white" fontSize="lg" fontWeight="bold">
          WhatsApp
        </Text>
      </HStack>
    );
  }
}

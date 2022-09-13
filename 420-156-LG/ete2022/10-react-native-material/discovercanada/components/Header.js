import React from 'react';
import { Platform } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import { AppBar, HStack } from "@react-native-material/core";

const appBarStyle = {
  ...Platform.select({
      android: {
        paddingTop: 30
      },
      ios: {
        paddingTop: 45
      }
    })
};

class Header extends React.Component {
  render() {
    return (
      <AppBar
        title="Discover Canada"
        color="#D80621"
        style={appBarStyle}
        trailing={(props) => (
          <HStack>
            <FontAwesome5 name="canadian-maple-leaf" size={24} color="white" />
          </HStack>
        )}
      />
    );
  }
}

export default Header;

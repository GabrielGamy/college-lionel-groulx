import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { AppBar } from '@react-native-material/core';
import { i18n } from "../languages";

export default class Header extends React.Component {
  render() {
    return (
      <AppBar
        title={`${i18n.t("application")} 🇨🇦`}
        color="#D80621"
        trailing={(props) => (
          <FontAwesome5
            name="canadian-maple-leaf"
            size={24}
            color="white"
            {...props}
          />
        )}
      />
    );
  }
}
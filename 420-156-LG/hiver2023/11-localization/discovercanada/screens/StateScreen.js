import React from 'react';
import { View, FlatList } from 'react-native';
import { Text, Stack } from "@react-native-material/core";
import StateCard from "../components/StateCard";
import Provinces from "../data/provinces";
import { i18n } from "../languages";

export default class StateScreen extends React.Component {
  renderStateItem = ({ item }) => {
    return (
      <StateCard item={item} />
    )
  }

  render() {
    return (
      <View style={{ margin: 8, flex: 1 }}>
        <Stack mv={4}>
          <Text variant="h4">{i18n.t("provinces")}</Text>
        </Stack>
        <FlatList 
          data={Provinces}
          keyExtractor={(item, index) => index}
          renderItem={this.renderStateItem}
        />
      </View>
    );
  }
}
import React from "react";
import { View, FlatList } from "react-native";
import { Text, Stack } from "@react-native-material/core";
import StateCard from "../components/StateCard";
import { i18n } from "../languages";
import { getProvinces } from "../data/firebase";

export default class StateScreen extends React.Component {
  state = {
    provinces: [],
  };

  async componentDidMount() {
    const provinces = await getProvinces();
    this.setState({ provinces });
  }

  renderStateItem = ({ item }) => {
    return <StateCard item={item} />;
  };

  render() {
    return (
      <View style={{ margin: 8, flex: 1 }}>
        <Stack mv={4}>
          <Text variant="h4">{i18n.t("provinces")}</Text>
        </Stack>
        <FlatList
          data={this.state.provinces}
          keyExtractor={(item, index) => index}
          renderItem={this.renderStateItem}
        />
      </View>
    );
  }
}

import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { HStack, Banner, Button } from '@react-native-material/core';
import { i18n } from "../languages";

export default class StateCard extends React.Component {
  render() {
    return (
      <View style={styles.stateItem}>
        <Image
          source={{ uri: this.props.item.image }}
          style={{ height: '70%', width: '100%' }}
        />
        <Banner
          text={i18n.t(this.props.item.name)}
          textStyle={{ fontSize: 20 }}
          buttons={
            <HStack>
              <Button
                key="learn-more"
                variant="text"
                title={i18n.t("en_savoir_plus")}
                compact
              />
            </HStack>
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  stateItem: {
    height: 260,
    backgroundColor: '#F8F8FF',
    padding: 8,
    paddingBottom: 20,
    justifyContent: 'space-between',
    marginVertical: 8,
  },
});

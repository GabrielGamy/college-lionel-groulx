import React from 'react';
import { StyleSheet, Image } from 'react-native';
import {
  Surface,
  Pressable,
  HStack,
  Banner,
  Button,
} from '@react-native-material/core';

export default class DiscoverCard extends React.Component {
  render() {
    const item = this.props.item;
    return (
      <Surface elevation={2} category="medium" style={styles.wrapper}>
        <Pressable style={styles.item}>
          <Image source={item.image} style={styles.image} />
          <Banner
            text={item.name}
            textStyle={{ fontSize: 16 }}
            buttons={
              <HStack spacing={2}>
                <Button
                  key="learn-more"
                  variant="text"
                  title="Learn More"
                  color="#D80621"
                  compact
                />
              </HStack>
            }
          />
        </Pressable>
      </Surface>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: { 
    marginHorizontal: 16,
    marginVertical: 8
  },
  item: {
    paddingHorizontal: 2,
    marginBottom: 6,
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 280,
  },
  image: {
    width: '100%',
    flex: 2,
  },
});

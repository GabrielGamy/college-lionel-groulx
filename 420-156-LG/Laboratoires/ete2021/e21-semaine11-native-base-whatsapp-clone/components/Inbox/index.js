import React from 'react';
import { TouchableOpacity } from 'react-native';
import {
  Box,
  FlatList,
  Heading,
  Avatar,
  HStack,
  VStack,
  Text,
  Spacer,
} from 'native-base';
import Header from '../Header/Header';
import { USERS } from '../../data';

export default class Inbox extends React.Component {
  renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => this.props.onPressDiscussion(item)}>
        <Box
          borderBottomWidth="1"
          _dark={{ borderColor: 'gray.600' }}
          borderColor="coolGray.200"
          pl="4"
          pr="5"
          py="2">
          <HStack space={3} justifyContent="space-between">
            <Avatar size="48px" source={{ uri: item.avatarUrl }} />
            <VStack>
              <Text _dark={{ color: 'warmGray.50' }} color="coolGray.800" bold>
                {item.fullName}
              </Text>
              <Text color="coolGray.600" _dark={{ color: 'warmGray.200' }}>
                {item.recentText}
              </Text>
            </VStack>
            <Spacer />
            <Text
              fontSize="xs"
              _dark={{ color: 'warmGray.50' }}
              alignSelf="flex-start">
              {item.timeStamp}
            </Text>
          </HStack>
        </Box>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <>
        <Header />
        <Box w={{ base: '100%', md: '25%' }}>
          <Heading fontSize="xl" p="4" pb="3">
            Inbox
          </Heading>
          <FlatList
            data={USERS}
            renderItem={this.renderItem}
            keyExtractor={(item) => item.id}
          />
        </Box>
      </>
    );
  }
}

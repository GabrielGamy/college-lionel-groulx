import React from 'react';
import { Platform, TouchableOpacity } from 'react-native';
import { HStack, Text, Avatar, VStack, Spacer, Icon } from 'native-base';
import { AntDesign } from '@expo/vector-icons'; 

export default class HeaderDiscussion extends React.Component {
  render() {
    const paddingTop = Platform.OS === 'ios' ? 12 : 6;
    const { avatar, name } = this.props;
    return (
      <HStack
        space={3}
        justifyContent="space-between"
        bg="green.700"
        p={4}
        pt={paddingTop}>
        <TouchableOpacity onPress={() => this.props.goBack()}>
          <Icon as={AntDesign} name="back" size="sm" m={2} color="white" />
        </TouchableOpacity>
        <Avatar size="36px" source={{ uri: avatar }} />
        <VStack>
          <Text color="white" bold>
            {name}
          </Text>
          <Text color="white"> Online</Text>
        </VStack>
        <Spacer />
      </HStack>
    );
  }
}

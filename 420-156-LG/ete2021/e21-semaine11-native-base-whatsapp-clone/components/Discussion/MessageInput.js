import React from 'react';
import { VStack, HStack, Heading, Input, Icon, Button } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';

export default class MessageInput extends React.Component {
  render() {
    return (
      <VStack width="100%" alignItems="center">
        <Input
          placeholder="Message"
          bg="#fff"
          width="100%"
          borderRadius="4"
          py="3"
          px="1"
          fontSize="14"
          _web={{
            _focus: {
              borderColor: 'muted.300',
              style: { boxShadow: 'none' },
            },
          }}
          InputLeftElement={
            <Icon
              m="2"
              ml="3"
              size="6"
              color="gray.400"
              as={<MaterialIcons name="insert-emoticon" />}
            />
          }
          InputRightElement={
            <HStack>
              <Icon
                m="2"
                mr="3"
                size="6"
                color="gray.400"
                as={<MaterialIcons name="mic" />}
              />
              <Icon
                m="2"
                mr="3"
                size="6"
                color="gray.400"
                as={<MaterialIcons name="enhance-photo-translate" />}
              />
              <Button roundedLeft="0">
                Send
              </Button>
            </HStack>
          }
        />
      </VStack>
    );
  }
}

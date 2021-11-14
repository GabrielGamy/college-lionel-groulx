import * as React from 'react';
import { NativeBaseProvider, Stack, Heading } from 'native-base';

export default class App extends React.Component {
  render() {
    return (
      <NativeBaseProvider>
        <Stack space={3} alignItems="center">
          <Heading textAlign="center" mb="10">
            HStack
          </Heading>
        </Stack>
      </NativeBaseProvider>
    );
  }
}

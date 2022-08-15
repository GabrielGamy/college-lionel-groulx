import * as React from 'react';
import { Text, View } from 'react-native';
import Header from "./components/header";
import Frame from "./components/frame";

class App extends React.Component {
  render() {
    return (
      <View>
        <Header />
        <Frame />
      </View>
    );
  }
}

export default App;


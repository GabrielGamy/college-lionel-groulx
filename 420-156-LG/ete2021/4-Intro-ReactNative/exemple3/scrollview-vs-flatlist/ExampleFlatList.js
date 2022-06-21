import React from 'react';
import { StyleSheet, 
  Text, 
  SafeAreaView, 
  FlatList, StatusBar } from 'react-native';

const DATA = Array.from(Array(100).keys()).map((number, index) => {
  return {
    id: index.toString(),
    title: `Item - ${number}`
  }
});

const ExampleFlatList = () => {
  const renderItem = ({ item }) => {
    return (
      <Text style={styles.text}>{item.title}</Text>
    )
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
    backgroundColor: 'pink',
    borderWidth: 1,
    borderBottomColor: 'black'
  },
});

export default ExampleFlatList;
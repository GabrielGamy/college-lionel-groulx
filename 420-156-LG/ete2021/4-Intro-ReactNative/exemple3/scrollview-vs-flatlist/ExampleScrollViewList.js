import React from 'react';
import { StyleSheet, 
  Text, 
  SafeAreaView, 
  ScrollView, StatusBar } from 'react-native';

const DATA = Array.from(Array(100).keys());

const ExampleScrollViewList = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {
          DATA.map((item) => {
            return (
              <Text key={item} style={styles.text}>
                  {`Item - ${item}`}
              </Text>
            )
          })
        }
      </ScrollView>
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

export default ExampleScrollViewList;
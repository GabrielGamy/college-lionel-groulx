/**
 * Programmation d'applications mobiles 1 - Collège Lionel-Groulx
 * Requetes HTTP - Fetch API 
 * find github users
 */
import React from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Alert } from "react-native";
import Header from "./components/Header";
import Contants from "./constants";
import UserList from "./components/UserList";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      isLoading: false,
      errorMessage: "",
      users: []
    }
  }

  setUserName = (value) => {
    this.setState({ userName: value });
  }

  findUser = () => {
    const { userName } = this.state;
  
    if(userName.length) {

      this.setState({ isLoading: true });

      fetch("https://api.github.com/search/users?q=" + userName)
      .then(response => response.json())
      .then(result => {
        if(result.errors && result.errors.length) {
          this.setState({ errorMessage: result.message, isLoading: false, users: [] });
        } else {
          this.setState({ errorMessage: "", isLoading: false, users: result.items });
        }
      }).catch(error => {
        this.setState({ errorMessage: error.message, isLoading: false, users: [] })
      })

    } else {
      Alert.alert("Invalid user name", "Please enter a vaild user name!");
    }
  }

  render() {
    const { userName, isLoading, errorMessage, users } = this.state;
    return (
      <>
        <Header />
        <View style={styles.findInputContainer}>
          <TextInput 
            style={styles.findInput} 
            placeholder="Enter user name"
            value={userName}
            onChangeText={this.setUserName} />
          <TouchableOpacity style={styles.findBtn} onPress={this.findUser}>
            <Text>Find</Text>
          </TouchableOpacity>
        </View>
        {
          isLoading && 
          <Text style={styles.centerText}>Loading ...</Text>
        }
        {
          errorMessage.length > 0 && 
          <Text style={[styles.centerText, { color: "red" }]}>{errorMessage}</Text>
        }
        <UserList users={users}/>
      </>
    )
  }
}

const styles = StyleSheet.create({
  findInputContainer: {
    margin: 16,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  findInput: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 8,
    borderRadius: 6,
    minHeight: 48,
    minWidth: 180
  },
  findBtn: {
    backgroundColor: Contants.primary,
    minWidth: 80,
    textAlign: "center",
    borderRadius: 8,
    minHeight: 50,
    justifyContent: "center",
    alignItems: "center"
  },
  centerText: {
    textAlign: "center"
  }
});
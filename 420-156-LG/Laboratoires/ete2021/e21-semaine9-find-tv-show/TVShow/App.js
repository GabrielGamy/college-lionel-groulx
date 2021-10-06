/**
 * Programmation d'applications mobiles 1 - Collège Lionel-Groulx
 * Requetes HTTP - Fetch API 
 * find tv shows
 */
import React from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Alert } from "react-native";
import Header from "./components/Header";
import Contants from "./constants";
import TVShows from "./components/TVShows";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tvShowName: "",
      isLoading: false,
      errorMessage: "",
      shows: []
    }
  }

  componentDidMount() {
    this.findTvShow("all");
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.tvShowName !== this.state.tvShowName) {
      this.findTvShow(this.state.tvShowName);
    }
  }

  setTvShowName = (value) => {
    this.setState({ tvShowName: value });
  }

  findTvShow = (showName) => {
    fetch("https://api.tvmaze.com/search/shows?q=" + showName)
    .then(response => response.json())
    .then(result => {
      if(result.status && result.status === 400) {
          this.setState({ errorMessage: result.message, isLoading: false, shows: [] });
      } else {
        this.setState({ errorMessage: "", isLoading: false, shows: result });
      }
    }).catch(error => {
      this.setState({ errorMessage: error.message, isLoading: false, shows: [] });
    })
  }

  render() {
    const { tvShowName, isLoading, errorMessage, shows } = this.state;
    return (
      <>
        <Header />
        <View style={styles.findInputContainer}>
          <TextInput 
            style={styles.findInput} 
            placeholder="Find a show"
            value={tvShowName}
            onChangeText={this.setTvShowName} />
        </View>
        {
          isLoading && 
          <Text style={styles.centerText}>Loading ...</Text>
        }
        {
          errorMessage.length > 0 && 
          <Text style={[styles.centerText, { color: "red" }]}>{errorMessage}</Text>
        }
        <TVShows shows={shows}/>
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
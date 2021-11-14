import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Linking,
  Alert,
} from "react-native";
import Constants from "../../constants";

class UserItem extends React.Component {
  constructor(props) {
    super(props);
  }

  openRepositories = () => {
    const url = this.props.user.html_url;
    Linking.canOpenURL(url).then((supported) => {
      if (supported) {
        Linking.openURL(url);
      } else {
        Alert.alert("Error", "Don't know how to open URI: " + url);
      }
    });
  };

  render() {
    const { user } = this.props;

    return (
      <View style={styles.userItem}>
        <Image
          style={styles.userImage}
          source={{
            uri: user.avatar_url,
          }}
        />
        <TouchableOpacity
          style={styles.userRepoContainer}
          onPress={this.openRepositories}
        >
          <Text style={styles.userRepoText}>Repositories</Text>
        </TouchableOpacity>
        <Text style={styles.userNameText}>{user.login}</Text>
      </View>
    );
  }
}

export default class UserList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text style={styles.headerText}>Users</Text>
        <View>
          {this.props.users.map((user) => (
            <UserItem key={user.id} user={user} />
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerText: {
    textAlign: "center",
    fontSize: 20,
  },
  userItem: {
    margin: 8,
    borderWidth: 1,
    borderColor: "black",
    padding: 16,
    borderRadius: 8,
  },
  userImage: {
    width: "100%",
    height: 200,
  },
  userRepoContainer: {
    justifyContent: "center",
    alignItems: "center",
    margin: 6,
  },
  userRepoText: {
    color: "blue",
  },
  userNameText: {
    backgroundColor: Constants.primary,
    padding: 10,
    textAlign: "center",
    margin: 6,
  },
});

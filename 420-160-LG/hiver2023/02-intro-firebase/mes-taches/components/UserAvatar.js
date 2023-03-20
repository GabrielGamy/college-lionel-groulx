import React from "react";
import { Avatar } from "@react-native-material/core";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import AppDialogProvider from "./AppDialogProvider";
import constants from "../constants";
import { i18n } from "../languages";
import { updateUser, getOrCreateUser } from "../data/firebase";
import { getData } from "../data/localDatabase";

const colors = constants.colors;

class UserAvatar extends React.Component {
  state = {
    visible: false,
    user: null,
    username: "",
  };

  async componentDidMount() {
    const userId = await getData("@user_id");
    const user = await getOrCreateUser(userId);

    const username = user.username;

    if (username && username !== "N/A") {
      this.setState({ user, username });
    }
  }

  saveUserName = async (username) => {
    const { user } = this.state;
    user.username = username;
    await updateUser(user);
  };

  openDialog = () => {
    this.setState({ visible: true });
  };

  closeDialog = (username) => {
    if (username && username.trim().length > 0) {
      this.setState({ visible: false, username: username.trim() });
      this.saveUserName(username);
    } else {
      this.setState({ visible: false });
    }
  };

  render() {
    const { username } = this.state;
    const hasUserName = username.length > 0;
    return (
      <View
        style={{
          paddingBottom: 8,
          borderBottomWidth: 1,
          borderBottomColor: colors.secondary,
        }}
      >
        <AppDialogProvider
          dialogTitle={i18n.t("newUserTitle")}
          dialogDescription={i18n.t("newUserDescription")}
          inputLabel={i18n.t("newUserInputLabel")}
          cancelText={i18n.t("newUserCancelText")}
          okText={i18n.t("newUserAddText")}
          visible={this.state.visible}
          onClose={this.closeDialog}
        />
        <TouchableOpacity style={styles.container} onPress={this.openDialog}>
          <Avatar
            label={hasUserName ? username : "--"}
            size={50}
            color={colors.primary}
            tintColor={colors.white}
          />
          <View style={{ marginHorizontal: 8, minWidth: 140 }}>
            <Text style={{ color: colors.black, fontSize: 18 }}>
              {hasUserName ? username : i18n.t("welcome")}
            </Text>
          </View>
          <View>
            <AntDesign name="caretdown" size={24} color={colors.primary} />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 16,
    marginHorizontal: 8,
  },
});

export default UserAvatar;

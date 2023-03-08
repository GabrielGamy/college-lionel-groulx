import React from 'react';
import { Avatar } from '@react-native-material/core';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import AppDialogProvider from './AppDialogProvider';
import constants from '../constants';
import { i18n } from '../languages';
import { storeData, getData } from '../data/database';

const colors = constants.colors;

class UserAvatar extends React.Component {
  state = {
    visible: false,
    userName: '',
  };

  async componentDidMount() {
    const userName = await getData('@userName');
    if (userName && userName.length) {
      this.setState({ userName });
    }
  }

  saveUserName = async (userName) => {
    await storeData('@userName', userName);
  };

  openDialog = () => {
    this.setState({ visible: true });
  };

  closeDialog = (userName) => {
    if (userName && userName.trim().length > 0) {
      this.setState({ visible: false, userName: userName.trim() });
      this.saveUserName(userName);
    } else {
      this.setState({ visible: false });
    }
  };

  render() {
    const { userName } = this.state;
    const hasUserName = userName.length > 0;
    return (
      <View
        style={{
          paddingBottom: 8,
          borderBottomWidth: 1,
          borderBottomColor: colors.secondary,
        }}>
        <AppDialogProvider
          dialogTitle={i18n.t('newUserTitle')}
          dialogDescription={i18n.t('newUserDescription')}
          inputLabel={i18n.t('newUserInputLabel')}
          cancelText={i18n.t('newUserCancelText')}
          okText={i18n.t('newUserAddText')}
          visible={this.state.visible}
          onClose={this.closeDialog}
        />
        <TouchableOpacity style={styles.container} onPress={this.openDialog}>
          <Avatar
            label={hasUserName ? userName : '--'}
            size={50}
            color={colors.primary}
            tintColor={colors.white}
          />
          <View style={{ marginHorizontal: 8, minWidth: 140 }}>
            <Text style={{ color: colors.black, fontSize: 18 }}>
              {hasUserName ? userName : i18n.t('welcome')}
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
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
    marginHorizontal: 8,
  },
});

export default UserAvatar;

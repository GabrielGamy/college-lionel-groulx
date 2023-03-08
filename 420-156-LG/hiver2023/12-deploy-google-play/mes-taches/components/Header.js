import React from 'react';
import { AppBar } from '@react-native-material/core';
import { Platform } from 'react-native';
import { i18n } from '../languages';
import constants from '../constants';

const colors = constants.colors;

const getPaddingTop = () => {
  switch (Platform.OS) {
    case 'ios':
      return 46;
    case 'android':
      return 30;
    default:
      return 8;
  }
};

const Header = () => (
  <AppBar
    title={i18n.t('app_name')}
    color={colors.primary}
    tintColor={colors.white}
    style={{ paddingTop: getPaddingTop() }}
  />
);

export default Header;

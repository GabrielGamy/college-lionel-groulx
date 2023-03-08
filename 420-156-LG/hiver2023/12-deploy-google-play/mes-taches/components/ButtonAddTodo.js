import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import constants from '../constants';
import AppDialogProvider from './AppDialogProvider';
import { i18n } from '../languages';

const ButtonAddTodo = (props) => {
  const [visible, setVisible] = React.useState(false);

  const openDialog = () => {
    setVisible(true);
  };

  const closeDialog = (inputValue) => {
    if (inputValue && inputValue.trim().length > 0) {
      props.addTodo(inputValue.trim());
    }
    setVisible(false);
  };

  return (
    <>
      <AppDialogProvider
        dialogTitle={i18n.t('newTodoTitle')}
        dialogDescription={i18n.t('newTodoDescription')}
        inputLabel={i18n.t('newTodoInputLabel')}
        cancelText={i18n.t('newTodoCancelText')}
        okText={i18n.t('newTodoAddText')}
        visible={visible}
        onClose={closeDialog}
      />
      <TouchableOpacity style={styles.btnAdd} onPress={openDialog}>
        <MaterialCommunityIcons
          name="plus"
          color={constants.colors.white}
          size={26}
        />
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  btnAdd: {
    width: 50,
    height: 50,
    backgroundColor: constants.colors.secondary,
    borderRadius: 9999,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    end: 16,
    right: 0,
    bottom: 16,
  },
});

export default ButtonAddTodo;

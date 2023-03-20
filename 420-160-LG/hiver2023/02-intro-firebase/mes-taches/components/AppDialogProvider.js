import React from 'react';
import {
  Stack,
  Button,
  Dialog,
  DialogHeader,
  DialogContent,
  DialogActions,
  Text,
  TextInput,
} from '@react-native-material/core';
import constants from '../constants';

const colors = constants.colors;

class AppDialog extends React.Component {
  state = {
    inputValue: '',
  };

  render() {
    const {
      dialogTitle,
      dialogDescription,
      inputLabel,
      okText,
      cancelText,
      visible,
      onClose,
    } = this.props;

    return (
      <>
        <Dialog visible={visible} onDismiss={() => onClose()}>
          <DialogHeader title={dialogTitle} />
          <DialogContent>
            <Stack spacing={2}>
              <Text>{dialogDescription}</Text>
              <TextInput
                placeholder={inputLabel}
                variant="standard"
                color={colors.primary}
                value={this.state.inputValue}
                onChangeText={(inputValue) => this.setState({ inputValue })}
              />
            </Stack>
          </DialogContent>
          <DialogActions>
            <Button
              title={cancelText}
              compact
              variant="text"
              onPress={() => onClose()}
              color={colors.secondary}
            />
            <Button
              title={okText}
              compact
              variant="text"
              onPress={() => {
                if (this.state.inputValue.length > 0) {
                  onClose(this.state.inputValue);
                } else {
                  onClose();
                }
                this.setState({ inputValue: ''})
              }}
              color={colors.primary}
            />
          </DialogActions>
        </Dialog>
      </>
    );
  }
}

class AppDialogProvider extends React.Component {
  render() {
    return <AppDialog {...this.props} />;
  }
}

export default AppDialogProvider;

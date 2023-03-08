import React from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import { ListItem } from '@react-native-material/core';
import { MaterialIcons } from '@expo/vector-icons';
import constants from '../constants';
import { i18n } from '../languages';

class TodoList extends React.Component {
  state = {
    visibleActionId: null,
  };

  renderTodoItem = ({ item }) => {
    return (
      <View>
        {item.id === this.state.visibleActionId && (
          <View style={styles.todoActions}>
            <TouchableOpacity
              onPress={() => this.props.onCompleteTodo(item.id)}>
              <Text
                style={{ color: constants.colors.primary, fontWeight: 'bold', fontSize: 14 }}>
                {i18n.t('completeText')}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btnWarning}
              onPress={() => this.props.onDeleteTodo(item.id)}>
              <Text style={{ color: constants.colors.secondary, fontWeight: 'bold', fontSize: 14 }}>
                {i18n.t('deleteText')}
              </Text>
            </TouchableOpacity>
          </View>
        )}
        <ListItem
          title={item.value}
          leading={
            <MaterialIcons
              name={item.isCompleted ? 'radio-button-on' : 'radio-button-off'}
              size={24}
              color={constants.colors.primary}
            />
          }
          trailing={(props) => (
            <MaterialIcons name="chevron-right" {...props} />
          )}
          onPress={() => this.setState({ visibleActionId: item.id })}
        />
      </View>
    );
  };

  render() {
    return (
      <FlatList
        data={this.props.todos}
        keyExtractor={(todo) => todo.id}
        renderItem={this.renderTodoItem}
      />
    );
  }
}

const styles = StyleSheet.create({
  todoActions: {
    flexDirection: 'row',
    margin: 4,
  },
  btnWarning: {
    marginLeft: 8,
  },
});

export default TodoList;

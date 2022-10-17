import React, { useState } from 'react';
import {
  Image,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  Alert,
} from 'react-native';

export default function Todos({ navigation }) {
  const [todoText, setTodoText] = useState('');
  const [todos, setTodos] = useState([
    {
      id: '1-apprendre-react',
      value: 'Apprendre React',
    },
  ]);

  const onChangeTodoText = (text) => {
    setTodoText(text);
  };

  const resetTodoText = () => {
    setTodoText('');
  };

  const addTodoText = () => {
    const id = `${todos.length}-${todoText}`;
    setTodos([...todos, { id, value: todoText }]);
  };

  const beforeDelete = (id) => {
    Alert.alert('Delete', 'Are you sure?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Ok',
        style: 'ok',
        onPress: () => {
          deleteTodoText(id);
        },
      },
    ]);
  };

  const deleteTodoText = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const renderItem = ({ item }) => {
    return (
      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor="#DDDDDD"
        onPress={() =>
          navigation.navigate('Todo Detail', {
            item,
            onDeleteTodo: beforeDelete,
          })
        }>
        <View style={styles.todoItem}>
          <Text>{item.value}</Text>
          <TouchableOpacity onPress={() => beforeDelete(item.id)}>
            <Image
              style={styles.removeIcon}
              source={require('../assets/remove.jpeg')}
            />
          </TouchableOpacity>
        </View>
      </TouchableHighlight>
    );
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/todo.png')} />
      <View style={styles.todoForm}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeTodoText}
          value={todoText}
        />
        <View style={{ marginVertical: 8 }}>
          <Button title="Reset" color="teal" onPress={resetTodoText} />
        </View>
        <View>
          <Button title="Add" color="#1E90FF" onPress={addTodoText} />
        </View>
      </View>
      <FlatList
        data={todos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.todoList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    margin: 20,
    width: 200,
    height: 200,
    alignSelf: 'center',
  },
  todoForm: {
    marginHorizontal: 16,
    backgroundColor: '#F8F8FF',
    padding: 16,
  },
  input: {
    height: 30,
    borderBottomWidth: 1,
    borderColor: 'black',
  },
  todoList: {
    margin: 16,
  },
  todoItem: {
    backgroundColor: '#F8F8FF',
    padding: 16,
    marginBottom: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  removeIcon: {
    width: 20,
    height: 20,
  },
});

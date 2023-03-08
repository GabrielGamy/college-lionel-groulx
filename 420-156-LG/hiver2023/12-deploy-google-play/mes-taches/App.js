import React from 'react';
import { View } from 'react-native';
import Header from './components/Header';
import UserAvatar from './components/UserAvatar';
import TodoList from './components/TodoList';
import ButtonAddTodo from './components/ButtonAddTodo';
import { Provider } from '@react-native-material/core';
import { storeData, getData } from './data/database';
import constants from "./constants";

export default class App extends React.Component {
  state = {
    todos: [],
  };

  async componentDidMount() {
    const todos = await getData('@todos');
    if (todos) {
      this.setState({ todos });
    }
  }

  saveTodos = async (todoList) => {
    await storeData('@todos', todoList);
  };

  addTodo = (value) => {
    const randomNumber = Math.floor(Math.random() * 1001);
    const id = `${randomNumber}-${value}`;

    const newTodo = {
      id,
      value,
      isCompleted: false,
    };

    const todos = this.state.todos;
    this.setState({
      todos: [...todos, newTodo],
    });

    this.saveTodos([...todos, newTodo]);
  };

  completeTodo = (id) => {
    const { todos } = this.state;

    const todoIndex = todos.findIndex((todo) => todo.id === id);
    todos[todoIndex].isCompleted = true;

    this.setState({
      todos: [...todos],
    });

    this.saveTodos(todos);
  };

  deleteTodo = (id) => {
    const { todos } = this.state;
    const newTodoList = todos.filter((todo) => todo.id !== id);

    this.setState({
      todos: newTodoList,
    });

    this.saveTodos(newTodoList);
  };

  render() {
    const { todos } = this.state;
    return (
      <Provider>
        <View style={{ flex: 1, backgroundColor: constants.colors.white }}>
          <Header />
          <UserAvatar />
          <TodoList
            todos={todos}
            onCompleteTodo={this.completeTodo}
            onDeleteTodo={this.deleteTodo}
          />
          <ButtonAddTodo addTodo={this.addTodo} />
        </View>
      </Provider>
    );
  }
}

import React from "react";
import { View } from "react-native";
import Header from "./components/Header";
import UserAvatar from "./components/UserAvatar";
import TodoList from "./components/TodoList";
import ButtonAddTodo from "./components/ButtonAddTodo";
import { Provider } from "@react-native-material/core";
import { getData } from "./data/localDatabase";
import constants from "./constants";
import { getOrCreateUser, updateUser } from "./data/firebase";

export default class App extends React.Component {
  state = {
    user: null,
    todos: [],
  };

  async componentDidMount() {
    const userId = await getData("@user_id");
    const user = await getOrCreateUser(userId);
    const todos = user.todos;
    this.setState({ user, todos });
  }

  saveTodos = async (todoList) => {
    const { user } = this.state;
    user.todos = todoList;
    await updateUser(user);
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
    const { user, todos } = this.state;
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

import { StyleSheet } from "react-native";
import Colors from "../../Constants/colors";

export default StyleSheet.create({
  todoList__flatList: {
    flex: 1,
    width: "90%",
    margin: 16,
  },
  todoItem__flatList: {
    backgroundColor: Colors.primaryColor,
    borderBottomWidth: 1,
    borderColor: "black",
    padding: 8,
  },
  todoList__flexContainer: {
    flex: 1,
    width: "90%",
    margin: 16,
  },
  todoItem__flexItem: {
    backgroundColor: Colors.primaryColor,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 8,
    padding: 8,
    margin: 8,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  flexTodoList: {},
  flexTodoItem: {},
});

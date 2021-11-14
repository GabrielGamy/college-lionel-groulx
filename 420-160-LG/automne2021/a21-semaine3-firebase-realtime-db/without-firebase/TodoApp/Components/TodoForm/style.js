import { StyleSheet } from "react-native";
import stylesButton from "../../Styles/button";
import Colors from "../../Constants/colors";

export default StyleSheet.create({
  ...stylesButton,

  flexFormContainer: {
    width: "90%",
    backgroundColor: Colors.primaryColor,
    padding: 16,
    borderRadius: 8,
  },
  textInput: {
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: "black",
    marginBottom: 16,
  },
});

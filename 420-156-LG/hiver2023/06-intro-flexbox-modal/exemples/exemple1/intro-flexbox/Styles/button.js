import { StyleSheet } from "react-native";
import Colors from "../Constants/colors";

export default StyleSheet.create({
  button: {
    backgroundColor: Colors.secondaryColor,
    padding: 12,
    marginVertical: 2,
    borderRadius: 8,
  },
  buttonReset: {
    backgroundColor: Colors.warningColor,
  },
  buttonText: {
    fontSize: 12,
    color: Colors.textColor,
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
});

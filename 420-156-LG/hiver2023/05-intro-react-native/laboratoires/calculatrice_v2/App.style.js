import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  inputWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputContainer: {
    margin: 8,
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    maxWidth: 100,
    marginVertical: 4,
    borderRadius: 4,
  },
  btnWrapper: {
    marginVertical: 16,
    marginHorizontal: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btnOp: {
    height: 40,
    width: 40,
    borderWidth: 1,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultat: { marginTop: 32 },
});

export default styles;
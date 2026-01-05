import { StyleSheet } from "react-native";

const H_PADDING = 24;

export const authStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7ed",
  },

  logo: {
    width: 100,
    height: 100,
    alignSelf: "center",
    marginBottom: 10,
  },

  title: {
    fontSize: 23,
    fontFamily: "PoppinsBold",
    color: "#3291B6",
    alignSelf: "center",
  },

  subtitle: {
    fontSize: 12,
    fontFamily: "PoppinsRegular",
    alignSelf: "center",
    marginBottom: 20,
  },

  label: {
    fontFamily: "PoppinsRegular",
    marginHorizontal: H_PADDING,
    marginTop: 15,
    fontSize: 14,
    color: "#646366",
  },

  inputField: {
    borderWidth: 1,
    borderColor: "#808081",
    borderRadius: 18,
    padding: 12,
    marginHorizontal: H_PADDING,
    fontFamily: "PoppinsRegular",
    fontSize: 13,
    marginTop: 8,
  },

  forgot: {
    alignSelf: "flex-end",
    marginRight: H_PADDING,
    marginTop: 12,
  },

  forgotText: {
    fontFamily: "PoppinsRegular",
    fontSize: 13,
    color: "#3291B6",
  },

  signInButton: {
    marginHorizontal: H_PADDING,
    marginTop: 20,
  },

  gradient: {
    borderRadius: 18,
    padding: 12,
    alignItems: "center",
  },

  signInButtonText: {
    color: "#fff",
    fontFamily: "PoppinsBold",
    fontSize: 16,
  },

  view1: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },

  Text1: {
    fontFamily: "PoppinsRegular",
    fontSize: 13,
    marginRight: 5,
  },

  Text2: {
    fontFamily: "PoppinsBold",
    fontSize: 13,
    color: "#3291B6",
  },
  formContainer: {
  maxHeight: 400, 
  //marginTop: 10,
},
});

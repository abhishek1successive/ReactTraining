import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  container: {
    flexGrow: 1,
    padding: 24,
    justifyContent: "center",
  },

  title: {
    fontSize: 32,
    fontWeight: "700",
    alignSelf: "center",
    marginBottom: 40,
    color: "#2D2D2D",
  },

  forgot: {
    alignSelf: "flex-end",
    marginBottom: 25,
  },

  forgotText: {
    fontSize: 13,
    color: "#d61d00",
  },

  orText: {
    textAlign: "center",
    marginVertical: 25,
    color: "#777",
  },

  socialRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },

  socialBtn: {
    width: 60,
    height: 50,
    backgroundColor: "#EAEAEA",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  signupText: {
    textAlign: "center",
    color: "#444",
  },

  imageContainer: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    maxHeight: 280,
  },
});

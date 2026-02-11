import { StyleSheet } from "react-native";

const RED = "#d61d00";

export const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  keyboardView: {
    flex: 1,
  },

  container: {
    flexGrow: 1,
    padding: 24,
    paddingTop: 24,
  },

  imageContainer: {
    alignItems: "center",
    marginBottom: 16,
  },

  image: {
    maxHeight: 140,
  },

  input: {
    backgroundColor: "#EAEAEA",
    borderRadius: 12,
    paddingHorizontal: 16,
    height: 46,
    marginBottom: 12,
    fontSize: 16,
  },

  passwordWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EAEAEA",
    borderRadius: 12,
    paddingHorizontal: 16,
    height: 46,
    marginBottom: 16,
  },

  passwordInput: {
    flex: 1,
    fontSize: 16,
  },

  showText: {
    color: RED,
    fontWeight: "600",
  },

  signupBtn: {
    backgroundColor: RED,
    height: 46,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },

  signupBtnText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },

  orText: {
    textAlign: "center",
    marginVertical: 12,
    color: "#777",
    fontSize: 14,
  },

  socialRow: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 16,
  },

  socialBtn: {
    width: 60,
    height: 50,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#DDD",
  },

  googleText: {
    fontWeight: "700",
    fontSize: 18,
    color: "#4285F4",
  },

  facebookText: {
    fontWeight: "700",
    fontSize: 18,
    color: "#1877F2",
  },

  loginLink: {
    marginTop: 16,
    alignSelf: "center",
  },

  loginLinkText: {
    textAlign: "center",
    color: "#444",
    fontSize: 14,
  },

  loginLinkHighlight: {
    fontWeight: "700",
    color: RED,
  },
});

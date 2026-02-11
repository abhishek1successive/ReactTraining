import React, { forwardRef, useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  TextInputProps,
  StyleSheet,
} from "react-native";

export interface AppInputProps extends TextInputProps {
  secure?: boolean;
}

const AppInput = forwardRef<TextInput, AppInputProps>(
  ({ secure = false, style, ...rest }, ref) => {
    const [hide, setHide] = useState(secure);

    // normal input
    if (!secure) {
      return <TextInput ref={ref} style={[styles.input, style]} {...rest} />;
    }

    // password input
    return (
      <View style={styles.passwordWrapper}>
        <TextInput
          ref={ref}
          style={styles.passwordInput}
          secureTextEntry={hide}
          {...rest}
        />

        <TouchableOpacity onPress={() => setHide(!hide)}>
          <Text style={styles.showText}>{hide ? "Show" : "Hide"}</Text>
        </TouchableOpacity>
      </View>
    );
  },
);

export default AppInput;

const styles = StyleSheet.create({
  passwordWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EAEAEA",
    borderRadius: 12,
    paddingHorizontal: 16,
    height: 50,
    marginBottom: 10,
  },
  input: {
    backgroundColor: "#EAEAEA",
    borderRadius: 12,
    paddingHorizontal: 16,
    height: 50,
    marginBottom: 16,
  },

  showText: {
    color: "#d61d00",
    fontWeight: "600",
  },

  passwordInput: {
    flex: 1,
  },
});

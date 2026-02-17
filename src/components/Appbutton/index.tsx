import { useTheme } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface AppButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
}
interface Colors {
  danger: string;
}

function AppButton({ title, onPress, disabled = false }: AppButtonProps) {
  const theme = useTheme();
  const { colors } = theme;

  const styles = createStyles(colors);

  return (
    <TouchableOpacity
      style={styles.loginBtn}
      disabled={disabled}
      onPress={onPress}
    >
      <Text style={styles.loginText}>{title}</Text>
    </TouchableOpacity>
  );
}

export default AppButton;

/* eslint-disable react-native/no-unused-styles */
const createStyles = (colors?: Colors) =>
  StyleSheet.create({
    loginBtn: {
      backgroundColor: colors?.danger,
      height: 50,
      borderRadius: 12,
      justifyContent: "center",
      alignItems: "center",
    },

    loginText: {
      color: "#fff",
      fontWeight: "600",
      fontSize: 16,
    },
  });

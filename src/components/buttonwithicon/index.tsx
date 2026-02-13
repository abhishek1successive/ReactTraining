import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

interface Props {
  name: string;
  icon: string;
  onPress?: () => void;
}

const ButtonWithIcon = ({ name, icon, onPress }: Props) => {
  return (
    <TouchableOpacity style={styles.browseCinema} onPress={onPress}>
      <Text style={styles.browseCinemaIcon}>{icon}</Text>

      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={styles.browseCinemaText}>{name}</Text>
        <Text style={styles.browseCinemaText}> ›</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonWithIcon;

const styles = StyleSheet.create({
  browseCinemaIcon: {
    fontSize: 18,
  },

  browseCinemaText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#000",
  },

  browseCinema: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF",
    marginHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 24,
    gap: 8,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
});

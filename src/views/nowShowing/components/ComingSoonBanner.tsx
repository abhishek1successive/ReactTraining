import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface Props {
  onPress: () => void;
}

const ComingSoonBanner: React.FC<Props> = ({ onPress }) => {
  return (
    <TouchableOpacity
      style={styles.comingSoonBanner}
      onPress={onPress}
      activeOpacity={0.9}
    >
      <Text style={styles.comingSoonText}>Coming Soon</Text>
      <Text style={styles.comingSoonSub}>Explore Upcoming Movies ›</Text>
    </TouchableOpacity>
  );
};

export default React.memo(ComingSoonBanner);

const RED = "#d61d00";

const styles = StyleSheet.create({
  comingSoonBanner: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: RED,
    marginHorizontal: 16,
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginBottom: 16,
    gap: 8,
  },
  comingSoonText: { fontSize: 16, fontWeight: "700", color: "#FFF" },
  comingSoonSub: { fontSize: 14, color: "#FFF" },
});

import React from "react";
import { ScrollView, TouchableOpacity, Text, StyleSheet } from "react-native";

interface Props {
  filters: string[];
  selectedFilter: string;
  onSelect: (filter: string) => void;
}

const FilterChips: React.FC<Props> = ({
  filters,
  selectedFilter,
  onSelect,
}) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.filtersScroll}
      style={styles.filtersWrapper}
    >
      {filters.map((filter) => {
        const isSelected = selectedFilter === filter;

        return (
          <TouchableOpacity
            key={filter}
            style={[
              styles.filterBtn,
              isSelected && {
                backgroundColor: "#d61d00",
                borderColor: "#d61d00",
              },
            ]}
            onPress={() => onSelect(filter)}
            activeOpacity={0.8}
          >
            <Text style={[styles.filterText, isSelected && { color: "#FFF" }]}>
              {filter}
            </Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default React.memo(FilterChips);

const styles = StyleSheet.create({
  filtersScroll: { paddingHorizontal: 16, gap: 10, paddingRight: 24 },

  filtersWrapper: { marginBottom: 12 },
  filterBtn: {
    paddingHorizontal: 16,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#DDD",
    justifyContent: "center",
  },
  filterText: { fontSize: 14, color: "#333", fontWeight: "500" },
});

import React, { memo, useCallback } from "react";
import {
  FlatList,
  TouchableOpacity,
  Text,
  View,
  StyleProp,
  ViewStyle,
  ListRenderItem,
} from "react-native";

export interface Category {
  id: string;
  label: string;
  icon: string;
  fav?: boolean;
}

interface Props {
  data: Category[];
  styles: any;
  onPress?: (item: Category) => void;
  containerStyle?: StyleProp<ViewStyle>;
}

const CategoryItem = memo(({ item, styles, onPress }: any) => {
  return (
    <TouchableOpacity
      style={styles.categoryItem}
      onPress={() => onPress?.(item)}
    >
      <View style={[styles.categoryIcon, item.fav && styles.categoryFav]}>
        <Text style={styles.categoryIconText}>{item.icon}</Text>

        {item.fav && (
          <View style={styles.favBadge}>
            <Text style={styles.favBadgeText}>FAV</Text>
          </View>
        )}
      </View>

      <Text style={styles.categoryLabel} numberOfLines={2}>
        {item.label}
      </Text>
    </TouchableOpacity>
  );
});

const CategoryList: React.FC<Props> = ({
  data,
  styles,
  onPress,
  containerStyle,
}) => {
  const renderItem: ListRenderItem<Category> = useCallback(
    ({ item }) => (
      <CategoryItem item={item} styles={styles} onPress={onPress} />
    ),
    [styles, onPress],
  );

  return (
    <FlatList
      horizontal
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.categoryScroll}
      style={[styles.categoryWrapper, containerStyle]}
      initialNumToRender={6}
      maxToRenderPerBatch={6}
      windowSize={5}
      removeClippedSubviews
    />
  );
};

export default memo(CategoryList);

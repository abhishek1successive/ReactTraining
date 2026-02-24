import React from "react";
import { Image, Pressable, Text, View } from "react-native";

import { ServiceItem } from "../BlinkitHome";
import { styles } from "../BlinkitHome.styles";

interface ServiceTileProps {
  item: ServiceItem;
  onPress: (service: ServiceItem) => void;
  onAddPress: (service: ServiceItem) => void;
}

const ServiceTile = ({ item, onPress, onAddPress }: ServiceTileProps) => {
  return (
    <Pressable style={styles.serviceCard} onPress={() => onPress(item)}>
      <View style={styles.serviceArt}>
        <Image source={item.image} style={styles.serviceArtImage} />
      </View>
      <Text style={styles.serviceName}>{item.name}</Text>
      <View style={styles.serviceBottomRow}>
        {item.badge ? (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{item.badge}</Text>
          </View>
        ) : (
          <View />
        )}
        <Pressable
          style={styles.addCircle}
          onPress={(event) => {
            event.stopPropagation();
            onAddPress(item);
          }}
        >
          <Text style={styles.addCircleText}>+</Text>
        </Pressable>
      </View>
    </Pressable>
  );
};

export default ServiceTile;

import React from "react";
import { Image, Pressable, Text, View } from "react-native";

import { BundleData } from "../BlinkitHome";
import { styles } from "../BlinkitHome.styles";

interface BundleCardProps {
  data: BundleData;
  onPress: () => void;
}

const BundleCard = ({ data, onPress }: BundleCardProps) => {
  return (
    <View style={styles.bundleCard}>
      <View style={styles.bundleTextWrap}>
        <Text style={styles.bundleTitle}>{data.title}</Text>
        <Text style={styles.bundleSubtitle}>{data.subtitle}</Text>
        <Pressable style={styles.bundleButton} onPress={onPress}>
          <Text style={styles.bundleButtonText}>{data.buttonText}</Text>
        </Pressable>
      </View>
      <View style={styles.bundleArt}>
        <Image source={data.image} style={styles.bundleArtImage} />
      </View>
    </View>
  );
};

export default BundleCard;

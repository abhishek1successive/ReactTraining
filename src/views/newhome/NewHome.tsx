import React from "react";
import { View, Text, ScrollView } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./NewHomeStyles";
import CategoryList from "./components/categories/CategoryList";
import { CATEGORIES } from "./models/CategoryData";
import MovieHorizontalList from "./components/movielist/MovieHorizontalList";
import ButtonWithIcon from "components/buttonwithicon";

const NewHomeScreen = () => {
  return (
    <SafeAreaView style={styles.safe} edges={["bottom"]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Category Navigation */}
        <CategoryList
          data={CATEGORIES}
          styles={styles}
          onPress={(item) => {
            console.log("Selected:", item.label);
          }}
        />

        {/* Promotional Banner */}
        <View style={styles.bannerWrapper}>
          <View style={styles.banner}>
            <View style={styles.bannerLeft}>
              <Text style={styles.bannerLeftSmall}>120+ MOVIES</Text>
              <Text style={styles.bannerLeftTitle}>EARLY BIRD OFFER</Text>
              <Text style={styles.bannerLeftSub}>
                EXCLUSIVE LIMITED TIME DEAL
              </Text>
              <View style={styles.bannerCodeBox}>
                <Text style={styles.bannerCode}>USE CODE: </Text>
                <Text style={styles.bannerCodeHighlight}>RL26</Text>
              </View>
              <Text style={styles.bannerBook}>BOOK ON: bookmyshow</Text>
              <Text style={styles.bannerTc}>T & C APPLY</Text>
            </View>
            <View style={styles.bannerRight}>
              <Text style={styles.bannerRightTitle}>
                THE RED LORRY{"\n"}FILM FESTIVAL
              </Text>
              <Text style={styles.bannerRightSub}>13-15 MAR 2026. MUMBAI</Text>
            </View>
          </View>
        </View>

        <MovieHorizontalList />

        {/* Browse by Cinema */}
        <ButtonWithIcon
          name="BROWSE BY CINEMA"
          icon="📍"
          onPress={() => console.log("Browse pressed")}
        />
        <View style={styles.bottomSpacer} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default NewHomeScreen;

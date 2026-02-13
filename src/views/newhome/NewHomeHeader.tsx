import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { headerStyles } from "./NewHomeStyles";

export const HomeHeader = () => (
  <SafeAreaView style={headerStyles.safe} edges={["top"]}>
    <View style={headerStyles.container}>
      <View style={headerStyles.top}>
        <Text style={headerStyles.title}>It All Starts Here!</Text>
        <View style={headerStyles.icons}>
          <TouchableOpacity style={headerStyles.iconBtn}>
            <Text style={headerStyles.iconText}>🔍</Text>
          </TouchableOpacity>
          <TouchableOpacity style={headerStyles.iconBtn}>
            <Text style={headerStyles.iconText}>🔔</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={headerStyles.locationRow}>
        <Text style={headerStyles.locationText}>Greater Noida</Text>
        <Text style={headerStyles.locationArrow}>›</Text>
      </TouchableOpacity>
    </View>
  </SafeAreaView>
);

import React from "react";
import {
  FlatList,
  Image,
  ImageSourcePropType,
  ListRenderItem,
  Modal,
  Pressable,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import BundleCard from "./components/BundleCard";
import SectionTitle from "./components/SectionTitle";
import ServiceTile from "./components/ServiceTile";
import { styles } from "./BlinkitHome.styles";

export interface BundleData {
  title: string;
  subtitle: string;
  buttonText: string;
  image: ImageSourcePropType;
}

export interface ServiceItem {
  id: string;
  name: string;
  badge?: string;
  image: ImageSourcePropType;
}

export type HomeSectionType = "bundle" | "services";

export interface HomeSection {
  id: string;
  type: HomeSectionType;
  title: string;
}

interface BlinkitHomeProps {
  sections: HomeSection[];
  bundle: BundleData;
  services: ServiceItem[];
  selectedService: ServiceItem | null;
  isServiceModalVisible: boolean;
  onKnowMorePress: () => void;
  onServicePress: (service: ServiceItem) => void;
  onAddService: (service: ServiceItem) => void;
  onCloseServiceModal: () => void;
  onModalAddService: (service: ServiceItem) => void;
}

const BlinkitHome = ({
  sections,
  bundle,
  services,
  selectedService,
  isServiceModalVisible,
  onKnowMorePress,
  onServicePress,
  onAddService,
  onCloseServiceModal,
  onModalAddService,
}: BlinkitHomeProps) => {
  const renderSection: ListRenderItem<HomeSection> = ({ item }) => {
    if (item.type === "bundle") {
      return (
        <View style={styles.sectionWrap}>
          <SectionTitle title={item.title} />
          <BundleCard data={bundle} onPress={onKnowMorePress} />
        </View>
      );
    }

    return (
      <View style={styles.sectionWrap}>
        <SectionTitle title={item.title} />
        <FlatList
          data={services}
          numColumns={3}
          scrollEnabled={false}
          keyExtractor={(service) => service.id}
          columnWrapperStyle={styles.serviceRow}
          contentContainerStyle={styles.serviceGridContent}
          renderItem={({ item: service }) => (
            <ServiceTile
              item={service}
              onPress={onServicePress}
              onAddPress={onAddService}
            />
          )}
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={["top"]}>
      <View style={styles.header}>
        <View style={styles.minutesPill}>
          <Text style={styles.minutesValue}>10</Text>
          <Text style={styles.minutesLabel}>MINS</Text>
        </View>
        <View style={styles.locationWrap}>
          <Text style={styles.locationTitle}>Sector 55</Text>
          <Text style={styles.locationSubtitle}>
            Sector 55, Gurugram, Haryana
          </Text>
        </View>
        <View style={styles.profileDot}>
          <View style={styles.profileDotInner} />
        </View>
      </View>

      <FlatList
        data={sections}
        keyExtractor={(section) => section.id}
        renderItem={renderSection}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />

      <Modal
        visible={isServiceModalVisible}
        animationType="slide"
        transparent
        onRequestClose={onCloseServiceModal}
      >
        <Pressable style={styles.modalOverlay} onPress={onCloseServiceModal}>
          <Pressable style={styles.modalSheet} onPress={() => {}}>
            {selectedService ? (
              <>
                <View style={styles.modalHandle} />
                <View style={styles.modalHeader}>
                  <Image source={selectedService.image} style={styles.modalImage} />
                  <View style={styles.modalTitleWrap}>
                    <Text style={styles.modalTitle}>{selectedService.name}</Text>
                    <Text style={styles.modalSubtitle}>
                      Professional house help service at your doorstep.
                    </Text>
                  </View>
                </View>
                <Pressable
                  style={styles.modalAddButton}
                  onPress={() => onModalAddService(selectedService)}
                >
                  <Text style={styles.modalAddButtonText}>Add Service</Text>
                </Pressable>
              </>
            ) : null}
          </Pressable>
        </Pressable>
      </Modal>
    </SafeAreaView>
  );
};

export default BlinkitHome;

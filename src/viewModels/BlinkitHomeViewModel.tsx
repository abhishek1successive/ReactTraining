import React, { useState } from "react";
import Glyphs from "assets/Glyphs";

import BlinkitHome, {
  BundleData,
  HomeSection,
  ServiceItem,
} from "views/blinkitHome/BlinkitHome";

const sections: HomeSection[] = [
  { id: "bundle", type: "bundle", title: "Exclusive bundle" },
  { id: "services", type: "services", title: "All house help services" },
];

const bundle: BundleData = {
  title: "Daily essential cleaning bundle",
  subtitle: "Sweeping, mopping and utensils with a single booking.",
  buttonText: "Know more",
  image: Glyphs.BookMyShow,
};

const services: ServiceItem[] = [
  { id: "1", name: "Sweeping", image: Glyphs.Adventure },
  { id: "2", name: "Sweeping & mopping", image: Glyphs.Mardaani },
  { id: "3", name: "Dusting", image: Glyphs.Border },
  { id: "4", name: "Bathroom", image: Glyphs.Maintenance },
  { id: "5", name: "Window", badge: "30 OFF", image: Glyphs.BookMyShow },
  { id: "6", name: "Staircase", image: Glyphs.Adventure },
  { id: "7", name: "Balcony", image: Glyphs.Mardaani },
  { id: "8", name: "Kitchen", image: Glyphs.Border },
  { id: "9", name: "Sofa cleaning", image: Glyphs.Maintenance },
];

const BlinkitHomeViewModel = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(
    null,
  );
  const [isServiceModalVisible, setServiceModalVisible] = useState(false);

  const onKnowMorePress = () => {
    console.log("Know more tapped");
  };

  const onServicePress = (service: ServiceItem) => {
    console.log("Service tapped:", service.name);
    setSelectedService(service);
    setServiceModalVisible(true);
  };

  const onAddService = (service: ServiceItem) => {
    console.log("Add service:", service.name);
  };

  const onCloseServiceModal = () => {
    setServiceModalVisible(false);
  };

  const onModalAddService = (service: ServiceItem) => {
    console.log("Add service from modal:", service.name);
    setServiceModalVisible(false);
  };

  return (
    <BlinkitHome
      sections={sections}
      bundle={bundle}
      services={services}
      selectedService={selectedService}
      isServiceModalVisible={isServiceModalVisible}
      onKnowMorePress={onKnowMorePress}
      onServicePress={onServicePress}
      onAddService={onAddService}
      onCloseServiceModal={onCloseServiceModal}
      onModalAddService={onModalAddService}
    />
  );
};

export default BlinkitHomeViewModel;

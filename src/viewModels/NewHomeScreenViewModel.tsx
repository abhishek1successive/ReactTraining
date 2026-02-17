import { navigate } from "@navigation";
import { SCREENS } from "@shared-constants";
import React from "react";
import NewHomeScreen from "views/newhome/NewHome";

const ontapped12 = () => {
  console.log("ON TAPPED");
  navigate(SCREENS.NOWSHOWINGSCREEN);
};
const NewHomeViewModel = () => {
  return <NewHomeScreen ontapped={ontapped12} />;
};

export default NewHomeViewModel;

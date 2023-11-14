import React from "react";
import { HeaderBackButton } from "@react-navigation/stack";

const CustomHeader = ({ navigation }) => {
  return (
    // Customize your header content here
    <HeaderBackButton
      onPress={() => navigation.toggleDrawer()}
      tintColor="white" // Adjust the color as needed
    />
  );
};

export default CustomHeader;

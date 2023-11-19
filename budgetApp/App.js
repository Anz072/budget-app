import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./AppNavigator";
import * as Font from "expo-font";
import { StatusBar } from "expo-status-bar";
import { MyProvider } from "./Context";

const loadFonts = async () => {
  await Font.loadAsync({
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "Inter-Light": require("./assets/fonts/Inter-Light.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
  });
};

const App = () => {
  useEffect(() => {
    loadFonts();
  }, []);

  return (
    <MyProvider>
      <StatusBar style="light" />
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </MyProvider>
  );
};

export default App;

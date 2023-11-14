import "react-native-gesture-handler";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import Home from "./screens/Home";
import { Ionicons } from "@expo/vector-icons";
import AddRecordScreen from "./screens/AddRecord";
import SlideFromBottom from "./assets/Components/SlidFromBottom";
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const CustomDrawerIcon = ({ props }) => {
  const navigation = useNavigation();

  return (
    <Ionicons
      name="menu"
      size={32}
      style={{ position: "absolute", left: 10, top: 10 }}
      color="#FFF"
      onPress={() => {
        navigation.dispatch(DrawerActions.toggleDrawer());
      }}
    />
  );
};

const HomeStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      gestureEnabled: true,
        gestureDirection: "vertical",
        cardStyleInterpolator: SlideFromBottom,
    }}
  >
    <Stack.Screen name="HomeScreen" component={Home} />
  </Stack.Navigator>
);

const AppNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTitle: "",
        size: 3,
        headerLeft: (props) => <CustomDrawerIcon props={props} />,
        headerTransparent: true,
        
      }}
    >
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name="AddRecordScreen" component={AddRecordScreen} />
    </Drawer.Navigator>
  );
};

export default AppNavigator;

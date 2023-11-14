import { StyleSheet, View, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const NewRecordButton = () => {
  const navigation = useNavigation();

  const newRecordHandler = () => {
    navigation.navigate("AddRecordScreen");
  };

  return (
    <View style={styles.overlay}>
      <Pressable style={styles.overlayButton} onPress={newRecordHandler}>
        <Ionicons
          style={styles.overlayButtonIcon}
          name="add-outline"
          size={65}
          color={"#FFF"}
        ></Ionicons>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    bottom: 20,
    right: 20,
    width: 60,
    height: 60,
    zIndex: 2,
  },
  overlayButton: {
    borderRadius: 30,
    backgroundColor: "#2E0854",
    height: "100%",
    width: "100%",
    fontWeight: "200",
    justifyContent: "center",
    alignItems: "center",
  },
  overlayButtonIcon: {
    marginTop: -4,
  },
});

export default NewRecordButton;

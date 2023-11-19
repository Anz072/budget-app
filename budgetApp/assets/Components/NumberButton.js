import { View, Pressable, StyleSheet, Text } from "react-native";
import { useNumberContext } from "../../Context";

const NumberButton = ({ value }) => {
  const { updateNumber, removeLastNumber } = useNumberContext();

  const updateNumberHandler = (btnVal) => {
    if (btnVal == "DEL") {
      removeLastNumber();
    } else {
      updateNumber(btnVal);
    }
  };

  return (
    <View style={styles.menuNumbersRowButton}>
      <Pressable
        style={styles.menuNumbersRowButton1}
        onPress={() => updateNumberHandler(value)}
      >
        <Text style={styles.menuNumbersRowButtonText}>{value}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  menuNumbersRowButton: {
    flex: 1,
  },
  menuNumbersRowButton1: {
    backgroundColor: "#F9FAFB",
    marginHorizontal: 1,
    marginVertical: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  menuNumbersRowButtonText: {
    fontSize: 36,
    fontWeight: "600",
    color: "#222",
  },
});

export default NumberButton;

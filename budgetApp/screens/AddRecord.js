import { useState } from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";

const AddRecordScreen = () => {
  const [trackableValue, setTrackableValue] = useState("0");

  const updateNumber = (btnVal) => {
    trackableValue === "0"
      ? setTrackableValue(btnVal)
      : setTrackableValue((prevValue) => `${prevValue}${btnVal}`);
  };

  return (
    <View style={styles.root}>
      <View style={styles.numDisplay}>
        <Text>{trackableValue}</Text>
      </View>
      <View style={styles.menuNumbers}>
        <View style={styles.menuNumbersRow}>
          <View style={styles.menuNumbersRowButton}>
            <Pressable 
              style={styles.menuNumbersRowButton1}
              onPress={() => updateNumber(7)}
            >
              <Text style={styles.menuNumbersRowButtonText}>7</Text>
            </Pressable>
          </View>
          <View style={styles.menuNumbersRowButton}>
            <Text>8</Text>
          </View>
          <View style={styles.menuNumbersRowButton}>
            <Text>9</Text>
          </View>
          <View style={styles.menuNumbersRowButton}>
            <Text>/</Text>
          </View>
        </View>
        <View style={styles.menuNumbersRow}>
          <View style={styles.menuNumbersRowButton}>
            <Text>4</Text>
          </View>
          <View style={styles.menuNumbersRowButton}>
            <Text>5</Text>
          </View>
          <View style={styles.menuNumbersRowButton}>
            <Text>6</Text>
          </View>
          <View style={styles.menuNumbersRowButton}>
            <Text>*</Text>
          </View>
        </View>
        <View style={styles.menuNumbersRow}>
          <View style={styles.menuNumbersRowButton}>
            <Text>1</Text>
          </View>
          <View style={styles.menuNumbersRowButton}>
            <Text>2</Text>
          </View>
          <View style={styles.menuNumbersRowButton}>
            <Text>3</Text>
          </View>
          <View style={styles.menuNumbersRowButton}>
            <Text>-</Text>
          </View>
        </View>
        <View style={styles.menuNumbersRow}>
          <View style={styles.menuNumbersRowButton}>
            <Text>.</Text>
          </View>
          <View style={styles.menuNumbersRowButton}>
            <Text>0</Text>
          </View>
          <View style={styles.menuNumbersRowButton}>
            <Text>DEL</Text>
          </View>
          <View style={styles.menuNumbersRowButton}>
            <Text>=</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#ff0000b2",
  },
  numDisplay: {
    height: 350,
    backgroundColor: "green",
    justifyContent:'center',
    alignItems:'center'
  },
  menuNumbers: {
    flex: 1,
    backgroundColor: "#ccc",
  },
  menuNumbersRow: {
    backgroundColor: "#ccc",
    flexDirection: "row",
    flex: 1,
  },
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
  menuNumbersRowButtonText:{
    fontSize: 36,
    fontWeight: '600',
    color: '#222'
  }
});

export default AddRecordScreen;

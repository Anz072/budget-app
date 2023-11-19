import { useState, useEffect } from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import NumberButton from "../assets/Components/NumberButton";
import { useNumberContext } from "../Context";

const AddRecordScreen = () => {
  const { trackableValue, resetNumber } = useNumberContext();
  

  return (
    <View style={styles.root}>
      <View style={styles.generalDisplay}>
        <View style={styles.generalDisplayValue}>
          <Text style={styles.trackableValue}>{trackableValue} Eur</Text>
        </View>
        <View style={styles.generalDisplaySwitch}>
          <Text style={styles.switchButton}>INCOME</Text>
          <Text style={styles.switchButton}>EXPENSE</Text>
        </View>
      </View>

      <View style={styles.menuNumbers}>
        <View style={styles.menuNumbersRow}>
          <NumberButton value={7} />
          <NumberButton value={8} />
          <NumberButton value={9} />
          <NumberButton value={"/"} />
        </View>
        <View style={styles.menuNumbersRow}>
          <NumberButton value={4} />
          <NumberButton value={5} />
          <NumberButton value={6} />
          <NumberButton value={"*"} />
        </View>
        <View style={styles.menuNumbersRow}>
          <NumberButton value={1} />
          <NumberButton value={2} />
          <NumberButton value={3} />
          <NumberButton value={"-"} />
        </View>
        <View style={styles.menuNumbersRow}>
          <NumberButton value={"."} />
          <NumberButton value={0} />
          <NumberButton value={"DEL"} />
          <NumberButton value={"OK"} />
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
  generalDisplay: {
    height: "55%",
    backgroundColor: "#35ec94",
    justifyContent: "center",
    alignItems: "center",
  },
  generalDisplayValue: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  generalDisplaySwitch: {
    flexDirection: "row",
  },
  switchButton: {
    flex: 1,
    height: 50,
    textAlign: "center",
    textAlignVertical: "center",
    borderWidth: 1,
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
  trackableValue: {
    fontSize: 72,
    color: "#FFF",
  },
});

export default AddRecordScreen;

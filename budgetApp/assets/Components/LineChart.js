import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Svg, { Rect } from "react-native-svg";

const ProgressChart = ({ total, current, backgroundColor }) => {
  const barWidth = (current / total) * 100;

  return (
    <View style={styles.chartContainer}>
      <Svg height="10" width="100%">
        <Rect width="100%" height="100%" fill="#E0E0E0"  rx="5"/>
        <Rect width={`${barWidth}%`} height="100%" fill={backgroundColor}  rx="5" />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  chartContainer: {
    marginVertical: 10,
  },
  label: {
    marginTop: 5,
    textAlign: "center",
  },
});

export default ProgressChart;

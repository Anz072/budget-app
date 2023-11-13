import { View, Text, StyleSheet } from "react-native";

const FlatListItem = ({ category, date, sum }) => {
  return (
    <View style={styles.root}>
      <View>
        <Text style={styles.categoryText}>{category}</Text>
        <Text>{date}</Text>
      </View>
      <Text style={styles.ammountText}>${sum}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 16,
  },
  categoryText: {
    fontWeight: "600",
    fontSize: 16,
  },
  ammountText: {
    fontWeight: "600",
    fontSize: 18,
  },
});

export default FlatListItem;

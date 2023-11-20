import { FlatList, View, Text, StyleSheet } from "react-native";
import { useNumberContext } from "../Context";
import { incomeCategories, expenseCategories } from "../categoryStructure";
import { LinearGradient } from "expo-linear-gradient";

const CategoryScreen = () => {
  const { trackableValue, recordType } = useNumberContext();
  const listData =
    recordType === "EXPENSE" ? expenseCategories : incomeCategories;

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.icon} </Text>
      <Text>{item.name}</Text>
    </View>
  );

  return (
    <>
      <View style={styles.header}>
        <LinearGradient colors={["#2E0854", "#431077"]} style={styles.headerGradient}>
          <Text style={styles.headerText}>Choose a Category</Text>
        </LinearGradient>
      </View>
      <View>
        <FlatList
          data={listData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    justifyContent: "left",
    padding: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  header: {
    height: "15%",
    backgroundColor: "",
  },
  headerGradient:{
    flex:1,
    justifyContent:"flex-end",
    alignItems:'center',
    paddingBottom: 20
  },
  headerText:{
    fontSize: 32,
    color: "#FFF"
  }
});
export default CategoryScreen;

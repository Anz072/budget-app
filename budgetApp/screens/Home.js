import { View, Text, StyleSheet, FlatList, ScrollView } from "react-native";
import ProgressChart from "../assets/Components/LineChart";
import { mockEntries } from "../mockData";
import FlatListItem from "../assets/Components/FlatListItem";
import { LinearGradient } from "expo-linear-gradient";

function Home() {
  const renderItem = (item, index) => {
    return (
      <>
        {index !== 0 && (
          <View style={styles.separatorContainer}>
            <View style={styles.separator}></View>
          </View>
        )}
        <FlatListItem
          category={item.category}
          date={item.date}
          sum={item.amount}
        />
      </>
    );
  };
  return (
    <ScrollView>
      <View style={styles.root}>
        <LinearGradient colors={["#2E0854", "#431077"]} style={styles.banner} >
          <Text style={styles.bannerText}>
            $678.<Text style={styles.bannerTextMini}>00</Text>
          </Text>
        </LinearGradient>
        <View style={styles.placer}>
          <View style={styles.card}>
            <View style={styles.cardLine1}>
              <Text>0</Text>
              <View style={styles.cardLineInner}>
                <Text>Month Budget</Text>
                <Text>1260</Text>
              </View>
            </View>
            <View style={styles.cardLine2}>
              <ProgressChart
                backgroundColor={"#2E0854"}
                current={220}
                total={454}
              />
            </View>
          </View>
          <View style={styles.card2}>
            <Text style={styles.card2Text}>Last Expenses</Text>
            <View style={styles.customUnderline} />
            <ScrollView>
              {mockEntries
                .slice(-5)
                .map((item, index) => renderItem(item, index))}
            </ScrollView>
            <View style={styles.textMoreInfo}>
              <Text>More→</Text>
            </View>
          </View>
          <View style={styles.card2}>
            <Text style={styles.card2Text}>Placeholder</Text>
            <View style={styles.customUnderline} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
  },
  banner: {
    width: "100%",
    height: 300,
    backgroundColor: "#2E0854",
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  bannerText: {
    fontSize: 48,
    color: "#FFF",
  },
  bannerTextMini: {
    fontSize: 38,
  },
  placer: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 16,
    gap: 20,
  },
  card: {
    width: "100%",
    height: 90,
    marginTop: -60,
    borderRadius: 16,
    backgroundColor: "#F9FAFB",
    elevation: 4,
    paddingHorizontal: 24,
    paddingVertical: 24,
    justifyContent: "center",
  },
  cardLine1: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardLineInner: {
    flexDirection: "row",
    gap: 8,
  },
  cardLine2: {},
  card2: {
    width: "100%",
    flex: 1,
    borderRadius: 16,
    backgroundColor: "#F9FAFB",
    elevation: 4,
    paddingHorizontal: 24,
    paddingTop: 10,
  },
  card2Text: {
    fontSize: 18,
    fontWeight: "600",
    color: "#00000067",
    paddingLeft: 8,
  },
  customUnderline: {
    backgroundColor: "#0000001d",
    height: 2,
    width: "60%",
    borderRadius: 6,
    marginTop: 3,
  },
  separatorContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  separator: {
    height: 2,
    width: "80%",
    backgroundColor: "#0000001d",
    borderRadius: 2,
  },
  textMoreInfo: {
    paddingVertical: 16,
    alignItems: "flex-end",
  },
});

export default Home;

import { View, Pressable, StyleSheet, Text } from "react-native";
import { useNumberContext } from "../../Context";

const SwitchButton = ({ name }) => {
  const { setrecordTypeHandler, recordType } = useNumberContext();
  let styling =
    name === recordType
      ? [styles.switchButtonContainerPress, styles.switchButtonContainerPressed]
      : [styles.switchButtonContainerPress];

  const switchHandler = (name) => {
    setrecordTypeHandler(name);
  };
  return (
    <View style={styles.switchButtonContainer}>
      <Pressable style={styling} onPress={() => switchHandler(name)}>
        <Text style={styles.switchButton}>{name}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  switchButton: {
    textAlign: "center",
    textAlignVertical: "center",
    color: "#FFF",
    fontWeight: "600",
    fontSize: 16,
  },
  switchButtonContainer: {
    width: "50%",
  },
  switchButtonContainerPress: {
    height: 45,
    justifyContent: "center",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#cecece",
    backgroundColor: "#5fcf99",
  },
  switchButtonContainerPressed: {
    backgroundColor: "#4fac7f",
  },
});

export default SwitchButton;

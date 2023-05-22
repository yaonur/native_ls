import { StyleSheet, Text, View, Pressable, Modal } from "react-native";

export default function GoalItem(props) {
  return (
      <View style={styles.goalItem}>
        <Pressable
          android_ripple={{ color: "#dddddd" }}
          onPress={() => props.onDeleteItem(props.id)}
          style={({ pressed }) => pressed && styles.pressedItem}
        >
          <Text style={styles.goalText}>{props.text}</Text>
        </Pressable>
      </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    padding: 8,
    color: "white",
  },
  pressedItem: {
    opacity: 0.5,
  },
});

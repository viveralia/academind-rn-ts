import { Pressable, StyleSheet, Text, View } from "react-native";

import type { Goal } from "../App";

// Pressable is the most up to date component for creating pressable items
// Touchables are not recommended from now on
// Android has a ripple effect for default, to achieve a similar look on iOS, the style prop in <Pressable />, exposes a pressed state as a parameter in a callback function

export default function GoalItem({
  goal,
  onDeleteGoal,
}: {
  goal: Goal;
  onDeleteGoal: (goal: Goal) => void;
}): JSX.Element {
  function deleteGoalHandler() {
    onDeleteGoal(goal);
  }

  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#370c6f" }}
        onPress={deleteGoalHandler}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{goal.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    overflow: "hidden",
  },
  goalText: {
    padding: 8,
    color: "white",
  },
  pressedItem: {
    backgroundColor: "#370c6f",
  },
});

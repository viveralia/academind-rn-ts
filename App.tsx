import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import { StatusBar } from "expo-status-bar";

import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export type Goal = {
  text: string;
  id: string;
};

function keyExtractor(item: Goal) {
  return item.id;
}

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [goals, setGoals] = useState<Goal[]>([]);

  function startAddGoalHanlder() {
    setIsModalVisible(true);
  }

  function endAddGoalHanlder() {
    setIsModalVisible(false);
  }

  function addGoalHandler(goal: string) {
    if (!goal) return;
    setGoals((p) => [...p, { id: Math.random().toString(), text: goal }]);
    endAddGoalHanlder();
  }

  function deleteGoalHandler(goal: Goal) {
    setGoals((p) => p.filter((g) => g.id !== goal.id));
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add new goal"
          color="#fff"
          onPress={startAddGoalHanlder}
        />
        <GoalInput
          onAddGoal={addGoalHandler}
          isVisible={isModalVisible}
          onCancel={endAddGoalHanlder}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={goals}
            keyExtractor={keyExtractor}
            renderItem={({ item }) => (
              <GoalItem goal={item} onDeleteGoal={deleteGoalHandler} />
            )}
          />
        </View>
        <View></View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 70,
    paddingHorizontal: 16,
    flex: 1,
  },
  goalsContainer: {
    flex: 5,
    marginTop: 32,
  },
});

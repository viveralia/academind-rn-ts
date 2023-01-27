import { useState } from "react";
import {
  Button,
  Image,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

export default function GoalInput({
  onAddGoal,
  isVisible,
  onCancel,
}: {
  onAddGoal: (goalTextToAdd: string) => void;
  isVisible: boolean;
  onCancel: () => void;
}): JSX.Element {
  const [goal, setGoal] = useState("");

  function goalInputHanlder(text: string) {
    setGoal(text);
  }

  function addGoalHanlder() {
    onAddGoal(goal);
    setGoal("");
  }

  return (
    <Modal visible={isVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image source={require("../assets/goal.png")} style={styles.image} />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal"
          onChangeText={goalInputHanlder}
          value={goal}
          placeholderTextColor="#370c6f"
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" color="#a877e8" onPress={onCancel} />
          </View>
          <View style={styles.button}>
            <Button title="Add Goal" color="#fff" onPress={addGoalHanlder} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "#370c6f",
  },
  textInput: {
    borderWidth: 1,
    backgroundColor: "#a877e8",
    borderRadius: 6,
    color: "#370c6f",
    width: "100%",
    padding: 12,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    width: 100,
    marginTop: 16,
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});

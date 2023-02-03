import { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, View } from "react-native";

import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import colors from "../constants/colors";

type Props = {
  onPickNumber: (number: number) => void;
};

export default function StartGameScreen({ onPickNumber }: Props): JSX.Element {
  const [number, setNumber] = useState("");

  function onEnterNumberHandler(text: string) {
    setNumber(text);
  }

  function resetInputHandler() {
    setNumber("");
  }

  function validateInputHandler() {
    const parsedNumber = parseInt(number);

    if (isNaN(parsedNumber) || parsedNumber <= 0 || parsedNumber > 99) {
      return Alert.alert(
        "Invalid number",
        "Please, enter a number between 1 and 99",
        [{ text: "Got it!", style: "default", onPress: resetInputHandler }]
      );
    }

    onPickNumber(parsedNumber);
  }

  return (
    <View style={styles.rootContainer}>
      <Title>Guess my number</Title>
      <Card>
        <InstructionText>Enter a number</InstructionText>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          value={number}
          onChangeText={onEnterNumberHandler}
        />
        <View style={styles.buttonsContainer}>
          <PrimaryButton style={styles.button} onPress={resetInputHandler}>
            Reset
          </PrimaryButton>
          <PrimaryButton style={styles.button} onPress={validateInputHandler}>
            Confirm
          </PrimaryButton>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  button: {
    flex: 1,
  },
  numberInput: {
    height: 50,
    fontSize: 32,
    borderBottomColor: colors.accent500,
    borderBottomWidth: 2,
    color: colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    width: 50,
    textAlign: "center",
  },
});

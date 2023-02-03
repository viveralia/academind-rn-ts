import { useEffect, useState } from "react";
import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import NumberContainer from "../components/game/NumberContainer";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import { generateRandomBetween } from "../utils";
import GuessLogItem from "../components/game/GuessLogItem";

type Props = {
  userNumber: number;
  onGameOver: (guessRounds: number[]) => void;
};

let minBoundary = 1;
let maxBoundary = 100;

export default function GameScreen({
  userNumber,
  onGameOver,
}: Props): JSX.Element {
  const [currentGuess, setCurrentGuess] = useState<number>(() =>
    generateRandomBetween(minBoundary, maxBoundary, userNumber)
  );
  const [guessRounds, setGuessRounds] = useState<number[]>([]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  useEffect(() => {
    if (currentGuess === userNumber) onGameOver(guessRounds);
  }, [currentGuess, userNumber, onGameOver]);

  function nextGuessHandler(direction: "lower" | "greater") {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      return Alert.alert("Don't lie!", "You know that this is wrong", [
        { text: "Sorry" },
      ]);
    }

    if (direction === "lower") maxBoundary = currentGuess;
    else minBoundary = currentGuess + 1;

    const guess = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
    setCurrentGuess(guess);
    setGuessRounds((guesses) => [guess, ...guesses]);
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>
          Lower or higher?
        </InstructionText>
        <View style={styles.buttonsContainer}>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
            <Ionicons name="md-remove" size={24} color="white" />
          </PrimaryButton>
          <PrimaryButton onPress={() => nextGuessHandler("greater")}>
            <Ionicons name="md-add" size={24} color="white" />
          </PrimaryButton>
        </View>
      </Card>
      <FlatList
        data={guessRounds}
        keyExtractor={(item) => item.toString()}
        renderItem={({ item, index }) => (
          <GuessLogItem guess={item} roundNumber={guessRounds.length - index} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  instructionText: {
    marginBottom: 12,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
});

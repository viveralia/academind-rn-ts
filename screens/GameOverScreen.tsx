import { Image, StyleSheet, Text, View } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";

import Title from "../components/ui/Title";
import colors from "../constants/colors";
import { Fonts } from "../constants/fonts";

type Props = {
  numberOfRounds: number;
  userNumber: number;
  onStartNewGame: () => void;
};

export default function GameOverScreen({
  numberOfRounds,
  onStartNewGame,
  userNumber,
}: Props): JSX.Element {
  return (
    <View style={styles.rootContainer}>
      <Title>Game Over!</Title>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/success.png")}
          resizeMode="cover"
          style={styles.image}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed{" "}
        <Text style={styles.highlightText}>{numberOfRounds}</Text> rounds to
        guess the number <Text style={styles.highlightText}>{userNumber}</Text>
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start new game</PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: colors.primary800,
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: Fonts.OpenSans,
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  highlightText: {
    fontFamily: Fonts.OpenSansBold,
    color: colors.accent500,
  },
});

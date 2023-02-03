import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";

import Title from "../components/ui/Title";
import colors from "../constants/colors";
import { DEVICE_WIDTH } from "../constants/device";
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
  const { width, height } = useWindowDimensions();

  let imageSize = 300;
  if (width < 380) imageSize = 150;
  if (height < 400) imageSize = 80;

  const imgStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
    borderWidth: 3,
    borderColor: colors.primary800,
  };

  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <Title>Game Over!</Title>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/success.png")}
          resizeMode="cover"
          style={[styles.image, imgStyle]}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed{" "}
        <Text style={styles.highlightText}>{numberOfRounds}</Text> rounds to
        guess the number <Text style={styles.highlightText}>{userNumber}</Text>
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start new game</PrimaryButton>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  imageContainer: {
    overflow: "hidden",
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

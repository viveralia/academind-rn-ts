import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import colors from "./constants/colors";
import GameOverScreen from "./screens/GameOverScreen";
import { Fonts } from "./constants/fonts";

export default function App() {
  const [pickedNumber, setPickedNumber] = useState<number | undefined>();
  const [isGameOver, setIsGameOver] = useState(false);
  const [numberOfRounds, setNumberOfRounds] = useState(0);

  const [fontsLoaded] = useFonts({
    [Fonts.OpenSans]: require("./assets/fonts/OpenSans-Regular.ttf"),
    [Fonts.OpenSansBold]: require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!fontsLoaded) return <AppLoading />;

  function pickedNumberHandler(number: number) {
    setPickedNumber(number);
  }

  function gameOverHandler(guessRounds: number[]) {
    setIsGameOver(true);
    setNumberOfRounds(guessRounds.length);
  }

  function startNewGameHandler() {
    setPickedNumber(undefined);
    setIsGameOver(false);
    setNumberOfRounds(0);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;
  if (pickedNumber)
    screen = (
      <GameScreen userNumber={pickedNumber} onGameOver={gameOverHandler} />
    );
  if (isGameOver)
    screen = (
      <GameOverScreen
        numberOfRounds={numberOfRounds}
        userNumber={pickedNumber}
        onStartNewGame={startNewGameHandler}
      />
    );

  return (
    <>
      <StatusBar style="light" />
      <LinearGradient
        colors={[colors.primary600, colors.primary500]}
        style={styles.container}
      >
        <ImageBackground
          source={require("./assets/images/background.png")}
          resizeMode="cover"
          style={styles.container}
          imageStyle={styles.bgImage}
        >
          <SafeAreaView style={styles.container}>{screen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    opacity: 0.175,
  },
});

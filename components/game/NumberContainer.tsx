import { PropsWithChildren } from "react";
import { StyleSheet, Text, View } from "react-native";

import colors from "../../constants/colors";
import { DEVICE_WIDTH } from "../../constants/device";
import { Fonts } from "../../constants/fonts";

export default function NumberContainer({
  children,
}: PropsWithChildren): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: colors.accent500,
    padding: DEVICE_WIDTH < 380 ? 12 : 24,
    borderRadius: 8,
    margin: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: colors.accent500,
    fontSize: DEVICE_WIDTH < 380 ? 28 : 36,
    fontFamily: Fonts.OpenSansBold,
  },
});

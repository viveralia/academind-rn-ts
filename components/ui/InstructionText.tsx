import { StyleSheet, Text, type TextProps } from "react-native";

import colors from "../../constants/colors";
import { Fonts } from "../../constants/fonts";

export default function InstructionText({
  children,
  style,
  ...props
}: TextProps) {
  return (
    <Text style={[styles.text, style]} {...props}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    color: colors.accent500,
    fontSize: 16,
    fontFamily: Fonts.OpenSans,
  },
});

import { StyleSheet, Text, TextProps } from "react-native";
import { Fonts } from "../../constants/fonts";

interface Props extends TextProps {}

export default function Title({
  style,
  children,
  ...props
}: Props): JSX.Element {
  return (
    <Text style={[styles.title, style]} {...props}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: "white",
    textAlign: "center",
    padding: 12,
    fontFamily: Fonts.OpenSansBold,
  },
});

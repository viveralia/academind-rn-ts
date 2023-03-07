import { PropsWithChildren } from "react";
import { StyleSheet, Text } from "react-native";
import { globalStyles } from "../../constants/styles";

export default function ExpensesListEmpty({
  children,
}: PropsWithChildren): JSX.Element {
  return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: globalStyles.colors.primary100,
    fontSize: 16,
    textAlign: "center",
    marginTop: 32,
  },
});

import { StyleSheet, Text, View } from "react-native";

import colors from "../../constants/colors";
import { Fonts } from "../../constants/fonts";

type Props = {
  roundNumber: number;
  guess: number;
};

export default function GuessLogItem({
  roundNumber,
  guess,
}: Props): JSX.Element {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}># {roundNumber}</Text>
      <Text style={styles.itemText}>Opponent's guess: {guess}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: colors.accent500,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    borderRadius: 4,
  },
  itemText: {
    fontFamily: Fonts.OpenSans,
  },
});

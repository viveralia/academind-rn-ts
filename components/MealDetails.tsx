import { TextProps, StyleSheet, Text, View } from "react-native";

import Meal from "../models/meal";

export type Props = {
  duration: Meal["duration"];
  affordability: Meal["affordability"];
  complexity: Meal["complexity"];
  textStyle?: TextProps["style"];
};

export default function MealDetails({
  affordability,
  complexity,
  duration,
  textStyle,
}: Props): JSX.Element {
  return (
    <View style={styles.details}>
      <Text style={[styles.detailItem, textStyle]}>{duration}m</Text>
      <Text style={[styles.detailItem, textStyle]}>
        {complexity.toUpperCase()}
      </Text>
      <Text style={[styles.detailItem, textStyle]}>
        {affordability.toUpperCase()}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    justifyContent: "center",
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});

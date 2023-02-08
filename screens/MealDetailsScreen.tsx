import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useLayoutEffect } from "react";
import { Image, ScrollView, StyleSheet, Text } from "react-native";

import { RootStackParamList } from "../App";
import IconButton from "../components/IconButton";
import MealDetails from "../components/MealDetails";
import { MEALS } from "../data";

export default function MealDetailsScreen({
  route,
  navigation,
}: NativeStackScreenProps<RootStackParamList, "MealDetails">): JSX.Element {
  const { mealId } = route.params;
  const meal = MEALS.find((meal) => meal.id === mealId);

  function headerRightButtonPressHandler() {
    console.log(meal);
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: meal.title,
      headerRight: () => (
        <IconButton
          materialIcon={(pressed) => (pressed ? "favorite" : "favorite-border")}
          onPress={headerRightButtonPressHandler}
        />
      ),
    });
  }, [mealId, navigation, headerRightButtonPressHandler]);

  return (
    <ScrollView style={styles.root}>
      <Image source={{ uri: meal.imageUrl }} style={styles.image} />
      <MealDetails
        affordability={meal.affordability}
        complexity={meal.complexity}
        duration={meal.duration}
        textStyle={styles.mealDetailsText}
      />
      <Text style={styles.subtitle}>Ingredients</Text>
      {meal.ingredients.map((ingredient) => (
        <Text style={styles.listItem} key={ingredient}>
          {ingredient}
        </Text>
      ))}
      <Text style={styles.subtitle}>Steps</Text>
      {meal.steps.map((step, index) => (
        <Text style={styles.listItem} key={step}>
          {index + 1}. {step}
        </Text>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
    marginBottom: 16,
  },
  mealDetailsText: {
    color: "#ccc",
  },
  subtitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginTop: 16,
  },
  listItem: {
    color: "#ccc",
    paddingHorizontal: 16,
    paddingVertical: 4,
  },
});

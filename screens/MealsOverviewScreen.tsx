import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useLayoutEffect } from "react";
import { FlatList, StyleSheet } from "react-native";

import { RootStackParamList } from "../App";
import MealItem from "../components/MealItem";
import { CATEGORIES, MEALS } from "../data";
import Meal from "../models/meal";

export default function MealsOverviewScreen({
  route,
  navigation,
}: NativeStackScreenProps<RootStackParamList, "MealsOverview">): JSX.Element {
  const { categoryId } = route.params;
  const meals = MEALS.filter((meal) => meal.categoryIds.includes(categoryId));
  const category = CATEGORIES.find((category) => category.id === categoryId);

  useLayoutEffect(() => {
    navigation.setOptions({ title: category.title });
  }, [categoryId, navigation]);

  function keyExtractor(item: Meal): string {
    return item.id;
  }

  function renderItem({ item }: { item: Meal }): JSX.Element {
    function handlePress() {
      navigation.navigate("MealDetails", { mealId: item.id });
    }

    return (
      <MealItem
        title={item.title}
        imageUrl={item.imageUrl}
        duration={item.duration}
        affordability={item.affordability}
        complexity={item.complexity}
        onPress={handlePress}
      />
    );
  }

  return (
    <FlatList
      data={meals}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useLayoutEffect } from "react";

import { RootStackParamList } from "../App";
import MealsList from "../components/MealsList";
import { CATEGORIES, MEALS } from "../data";

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

  return <MealsList meals={meals} />;
}

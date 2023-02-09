import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useContext, useLayoutEffect } from "react";
import { Image, ScrollView, StyleSheet, Text } from "react-native";

import { RootStackParamList } from "../App";
import IconButton from "../components/IconButton";
import MealDetails from "../components/MealDetails";
import { MEALS } from "../data";
// import { FavoritesContext } from "../store/context/FavoritesContext";
import { useAppDispatch, useAppSelector } from "../store/redux/store";
import { addFavorite, removeFavorite } from "../store/redux/favorites";

export default function MealDetailsScreen({
  route,
  navigation,
}: NativeStackScreenProps<RootStackParamList, "MealDetails">): JSX.Element {
  const { mealId } = route.params;
  const meal = MEALS.find((meal) => meal.id === mealId);

  // const { addFavorite, ids, removeFavorite } = useContext(FavoritesContext);
  const { ids } = useAppSelector((state) => state.favorites);
  const dispatch = useAppDispatch();
  const isFavorite = ids.includes(mealId);

  // function headerRightButtonPressHandlerWithContext() {
  //   if (isFavorite) removeFavorite(mealId);
  //   else addFavorite(mealId);
  // }

  function headerRightButtonPressHandlerWithRedux() {
    const action = isFavorite ? removeFavorite : addFavorite;
    dispatch(action(mealId));
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: meal.title,
      headerRight: () => (
        <IconButton
          materialIcon={(pressed) => {
            if (isFavorite) return "favorite";
            return pressed ? "favorite" : "favorite-border";
          }}
          onPress={headerRightButtonPressHandlerWithRedux}
        />
      ),
    });
  }, [mealId, navigation, headerRightButtonPressHandlerWithRedux, isFavorite]);

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

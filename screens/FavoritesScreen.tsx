import { DrawerScreenProps } from "@react-navigation/drawer";
import { CompositeScreenProps } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";

import { DrawerParamList, RootStackParamList } from "../App";
import MealsList from "../components/MealsList";
import { MEALS } from "../data";
// import { FavoritesContext } from "../store/context/FavoritesContext";
import { useAppSelector } from "../store/redux/store";

export default function FavoritesScreen({}: CompositeScreenProps<
  NativeStackScreenProps<RootStackParamList, "Drawer">,
  DrawerScreenProps<DrawerParamList, "Favorites">
>): JSX.Element {
  // const { ids } = useContext(FavoritesContext);
  const { ids } = useAppSelector((state) => state.favorites);
  const meals = MEALS.filter((meal) => ids.includes(meal.id));

  if (!meals.length) return <EmptyList />;

  return <MealsList meals={meals} />;
}

function EmptyList(): JSX.Element {
  return (
    <View style={styles.root}>
      <Text style={styles.text}>You have no favorite meals yet.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});

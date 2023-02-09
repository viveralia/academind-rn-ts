import { DrawerNavigationProp } from "@react-navigation/drawer";
import {
  CompositeNavigationProp,
  useNavigation,
} from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { FlatList, FlatListProps } from "react-native";

import { DrawerParamList, RootStackParamList } from "../App";
import Meal from "../models/meal";
import MealItem from "./MealItem";

type Props = {
  meals: Meal[];
} & Omit<FlatListProps<Meal>, "data" | "renderItem" | "keyExtractor">;

type Navigation = CompositeNavigationProp<
  NativeStackNavigationProp<RootStackParamList, "Drawer">,
  DrawerNavigationProp<DrawerParamList, "Favorites">
>;

export default function MealsList({ meals, ...props }: Props): JSX.Element {
  const navigation = useNavigation<Navigation>();

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
      {...props}
    />
  );
}

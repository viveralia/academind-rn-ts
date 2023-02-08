import { FlatList } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data";
import Category from "../models/category";
import { RootStackParamList } from "../App";

function keyExtractor(item: Category) {
  return item.id;
}

export default function CategoriesScreen({
  navigation,
}: NativeStackScreenProps<RootStackParamList, "MealsCategories">): JSX.Element {
  function renderCategoryItem({ item }: { item: Category }): JSX.Element {
    function pressHandler() {
      navigation.navigate("MealsOverview", { categoryId: item.id });
    }

    return (
      <CategoryGridTile
        title={item.title}
        color={item.color}
        onPress={pressHandler}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={keyExtractor}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}

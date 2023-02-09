import "react-native-gesture-handler";

import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  NavigationContainer,
  NavigatorScreenParams,
  Theme,
} from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { MaterialIcons } from "@expo/vector-icons";
import { Provider } from "react-redux";

import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";
import CategoriesScreen from "./screens/CategoriesScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
import FavoritesContextProvider from "./store/context/FavoritesContext";
import { store } from "./store/redux/store";

export type DrawerParamList = {
  Categories: undefined;
  Favorites: undefined;
};

const Drawer = createDrawerNavigator<DrawerParamList>();

function DrawerNavigator(): JSX.Element {
  return (
    <Drawer.Navigator screenOptions={{ headerTintColor: theme.colors.text }}>
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          drawerIcon: (props) => <MaterialIcons name="fastfood" {...props} />,
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          drawerIcon: (props) => <MaterialIcons name="favorite" {...props} />,
        }}
      />
    </Drawer.Navigator>
  );
}

export type RootStackParamList = {
  Drawer: NavigatorScreenParams<DrawerParamList>;
  MealsOverview: { categoryId: string };
  MealDetails: { mealId: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <Provider store={store}>
        <FavoritesContextProvider>
          <NavigationContainer theme={theme}>
            <Stack.Navigator>
              <Stack.Screen
                name="Drawer"
                component={DrawerNavigator}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="MealsOverview"
                component={MealsOverviewScreen}
              />
              <Stack.Screen name="MealDetails" component={MealDetailsScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </FavoritesContextProvider>
      </Provider>
    </>
  );
}

const theme: Theme = {
  colors: {
    background: "#3f2f25",
    border: "transparent",
    card: "#351401",
    notification: "white",
    primary: "white",
    text: "white",
  },
  dark: false,
};

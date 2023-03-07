import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";

import { globalStyles, theme } from "./constants/styles";
import AllExpensesScreen from "./screens/AllExpensesScreen";
import ManageExpenseScreen from "./screens/ManageExpenseScreen";
import RecentExpensesScreen from "./screens/RecentExpenses";
import IconButton from "./components/Ui/IconButton";
import { ExpensesContextProvider } from "./store/ExpensesContext";

export type StackParamList = {
  ManageExpense: { expenseId?: string };
  ExpensesOverview: undefined;
};

export type BottomTabsParamList = {
  RecentExpenses: undefined;
  AllExpenses: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();
const BottomTabs = createBottomTabNavigator<BottomTabsParamList>();

function ExpensesOverview(): JSX.Element {
  return (
    <BottomTabs.Navigator
      screenOptions={({ navigation }) => ({
        headerRight: () => (
          <IconButton
            icon="add"
            size={24}
            color={globalStyles.colors.accent500}
            onPress={() => navigation.navigate("ManageExpense")}
          />
        ),
      })}
    >
      <BottomTabs.Screen
        name="RecentExpenses"
        component={RecentExpensesScreen}
        options={{
          title: "Recent Expenses",
          tabBarLabel: "Recent",
          tabBarIcon: (props) => <Ionicons name="hourglass" {...props} />,
        }}
      />
      <BottomTabs.Screen
        name="AllExpenses"
        component={AllExpensesScreen}
        options={{
          title: "All Expenses",
          tabBarLabel: "All",
          tabBarIcon: (props) => <Ionicons name="calendar" {...props} />,
        }}
      />
    </BottomTabs.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <ExpensesContextProvider>
        <NavigationContainer theme={theme}>
          <Stack.Navigator>
            <Stack.Screen
              name="ExpensesOverview"
              component={ExpensesOverview}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ManageExpense"
              component={ManageExpenseScreen}
              options={{
                presentation: "modal",
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ExpensesContextProvider>
    </>
  );
}

import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { CompositeNavigationProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useContext } from "react";

import { BottomTabsParamList, StackParamList } from "../App";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/ExpensesContext";
import { getDateMinusDays } from "../utils/date";

export type RecentExpensesScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<BottomTabsParamList, "RecentExpenses">,
  NativeStackNavigationProp<StackParamList, "ExpensesOverview">
>;

export default function RecentExpensesScreen(): JSX.Element {
  const { expenses } = useContext(ExpensesContext);

  const recentExpenses = expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return expense.date > date7DaysAgo && expense.date <= today;
  });

  return (
    <ExpensesOutput
      expenses={recentExpenses}
      periodName="Last 7 days"
      fallbackText="No expenses registered in the last 7 days"
    />
  );
}

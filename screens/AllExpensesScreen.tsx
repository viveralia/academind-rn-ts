import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { CompositeNavigationProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useContext } from "react";

import { BottomTabsParamList, StackParamList } from "../App";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/ExpensesContext";

export type AllExpensesScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<BottomTabsParamList, "AllExpenses">,
  NativeStackNavigationProp<StackParamList, "ExpensesOverview">
>;

export default function AllExpensesScreen(): JSX.Element {
  const { expenses } = useContext(ExpensesContext);

  return (
    <ExpensesOutput
      expenses={expenses}
      periodName="Total"
      fallbackText="No expenses"
    />
  );
}

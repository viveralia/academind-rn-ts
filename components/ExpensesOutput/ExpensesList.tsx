import { FlatList } from "react-native";

import { Expense } from "../../models";
import ExpenseItem from "./ExpenseItem";

export interface ExpensesListProps {
  expenses: Expense[];
}

function keyExtractor(expense: Expense) {
  return expense.id;
}

export default function ExpensesList({
  expenses,
}: ExpensesListProps): JSX.Element {
  function renderItem({ item }: { item: Expense }): JSX.Element {
    return <ExpenseItem expense={item} />;
  }

  return (
    <FlatList
      data={expenses}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
    />
  );
}

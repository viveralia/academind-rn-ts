import { StyleSheet, View } from "react-native";

import { globalStyles } from "../../constants/styles";
import ExpensesList from "./ExpensesList";
import ExpensesListEmpty from "./ExpensesListEmpty";
import ExpensesSummary, { ExpensesSummaryProps } from "./ExpensesSummary";

interface ExpensesOutputProps extends ExpensesSummaryProps {
  fallbackText: string;
}

export default function ExpensesOutput({
  expenses,
  periodName,
  fallbackText,
}: ExpensesOutputProps) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} periodName={periodName} />
      {expenses.length === 0 ? (
        <ExpensesListEmpty>{fallbackText}</ExpensesListEmpty>
      ) : (
        <ExpensesList expenses={expenses} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingTop: 24,
    backgroundColor: globalStyles.colors.primary700,
    flex: 1,
  },
});

import { useNavigation } from "@react-navigation/native";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { globalStyles } from "../../constants/styles";
import { Expense } from "../../models";
import { AllExpensesScreenNavigationProp } from "../../screens/AllExpensesScreen";
import { RecentExpensesScreenNavigationProp } from "../../screens/RecentExpenses";
import { getFormatedDate } from "../../utils/date";

export interface ExpenseItemProps {
  expense: Expense;
}

type Navigation =
  | AllExpensesScreenNavigationProp
  | RecentExpensesScreenNavigationProp;

export default function ExpenseItem({
  expense,
}: ExpenseItemProps): JSX.Element {
  const navigation = useNavigation<Navigation>();

  function pressHandler() {
    navigation.navigate("ManageExpense", { expenseId: expense.id });
  }

  return (
    <Pressable
      onPress={pressHandler}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.item}>
        <View>
          <Text style={[styles.textBase, styles.description]}>
            {expense.description}
          </Text>
          <Text style={styles.textBase}>{getFormatedDate(expense.date)}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>${expense.amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
  item: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: globalStyles.colors.primary500,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 6,
    elevation: 3,
    shadowColor: globalStyles.colors.gray500,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
  },
  textBase: {
    color: globalStyles.colors.primary50,
  },
  description: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: "bold",
  },
  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    minWidth: 80,
  },
  amount: {
    color: globalStyles.colors.primary500,
    fontWeight: "bold",
  },
});

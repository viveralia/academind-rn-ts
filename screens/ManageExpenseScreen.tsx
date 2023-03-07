import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useContext, useLayoutEffect } from "react";
import { StyleSheet, View } from "react-native";

import { expenseToFormAdapter } from "../adapters/ManageExpense";
import { StackParamList } from "../App";
import ExpenseForm, {
  ParsedExpenseFormValues,
} from "../components/ManageExpense/ExpenseForm";
import IconButton from "../components/Ui/IconButton";
import { globalStyles } from "../constants/styles";
import { ExpensesContext } from "../store/ExpensesContext";

export type ManageExpenseScreenProps = NativeStackScreenProps<
  StackParamList,
  "ManageExpense"
>;

export default function ManageExpenseScreen({
  route,
  navigation,
}: ManageExpenseScreenProps): JSX.Element {
  const { updateExpense, addExpense, deleteExpense, expenses } =
    useContext(ExpensesContext);

  const expenseId = route.params?.expenseId;
  const isEditing = !!expenseId;
  const selectedExpense = expenses.find((expense) => expense.id === expenseId);
  const initialValues = expenseToFormAdapter(selectedExpense);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit expense" : "Add expense",
    });
  }, [isEditing]);

  function deleteExpenseHandler() {
    deleteExpense(expenseId!);
    navigation.goBack();
  }

  function cancelHandler() {
    navigation.goBack();
  }

  function confirmHandler(payload: ParsedExpenseFormValues) {
    if (isEditing) updateExpense(expenseId, payload);
    else addExpense(payload);
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <ExpenseForm
        onSubmit={confirmHandler}
        onCancel={cancelHandler}
        submitLabel={isEditing ? "Update" : "Add"}
        initialValues={initialValues}
      />
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            color={globalStyles.colors.error500}
            size={36}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: globalStyles.colors.primary800,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: globalStyles.colors.primary400,
    alignItems: "center",
  },
});

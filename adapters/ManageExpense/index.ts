import { ExpenseFormValues } from "../../components/ManageExpense/ExpenseForm";
import { Expense } from "../../models";
import { getFormatedDate } from "../../utils/date";

export function expenseToFormAdapter(
  expense: Expense | undefined
): ExpenseFormValues {
  return {
    amount: {
      value: expense?.amount ? expense.amount.toString() : "",
      isValid: true,
    },
    date: {
      value: expense?.date ? getFormatedDate(expense.date) : "",
      isValid: true,
    },
    description: {
      value: expense?.description ?? "",
      isValid: true,
    },
  };
}

// export function formToExpenseAdapter(
//   values: ExpenseFormValues
// ): Omit<Expense, "id"> {
//   return {
//     amount: parseFloat(values.amount),
//     date: new Date(values.date),
//     description: values.description,
//   };
// }

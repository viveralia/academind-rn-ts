import { createContext, PropsWithChildren, useState } from "react";

import { expenses as dummyExpenses } from "../constants/expenses";
import { Expense } from "../models";

type AddExpensePayload = Omit<Expense, "id">;
type UpdateExpensePayload = Partial<AddExpensePayload>;

export interface ExpensesContextValue {
  expenses: Expense[];
  addExpense: (expense: AddExpensePayload) => void;
  updateExpense: (id: Expense["id"], expense: UpdateExpensePayload) => void;
  deleteExpense: (id: Expense["id"]) => void;
}

export const ExpensesContext = createContext({} as ExpensesContextValue);

export function ExpensesContextProvider({
  children,
}: PropsWithChildren): JSX.Element {
  const [expenses, setExpenses] = useState<Expense[]>(dummyExpenses);

  function addExpense(expense: AddExpensePayload) {
    setExpenses((expenses) => [
      { id: new Date().toISOString(), ...expense },
      ...expenses,
    ]);
  }

  function updateExpense(id: Expense["id"], payload: UpdateExpensePayload) {
    setExpenses((expenses) =>
      expenses.map((expense) => {
        if (expense.id === id) return { ...expense, ...payload };

        return expense;
      })
    );
  }

  function deleteExpense(id: Expense["id"]) {
    setExpenses((expenses) => expenses.filter((expense) => expense.id !== id));
  }

  return (
    <ExpensesContext.Provider
      value={{
        expenses,
        addExpense,
        updateExpense,
        deleteExpense,
      }}
    >
      {children}
    </ExpensesContext.Provider>
  );
}

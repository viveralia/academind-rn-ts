import { useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import Button from "../Ui/Button";

import Input from "./Input";

interface FormValue<T = "string"> {
  value: T;
  isValid: boolean;
}

export interface ExpenseFormValues {
  amount: FormValue<string>;
  date: FormValue<string>;
  description: FormValue<string>;
}

export interface ParsedExpenseFormValues {
  amount: number;
  date: Date;
  description: string;
}

interface ExpenseFormProps {
  onSubmit: (values: ParsedExpenseFormValues) => void;
  submitLabel: string;
  onCancel: () => void;
  initialValues?: ExpenseFormValues;
}

const defaultValues: ExpenseFormValues = {
  amount: {
    value: "",
    isValid: false,
  },
  date: {
    value: "",
    isValid: false,
  },
  description: {
    value: "",
    isValid: false,
  },
};

export default function ExpenseForm({
  onSubmit,
  submitLabel,
  onCancel,
  initialValues = defaultValues,
}: ExpenseFormProps): JSX.Element {
  const [inputs, setInputs] = useState<ExpenseFormValues>(initialValues);

  function inputChangeHandler(
    identifier: keyof ExpenseFormValues,
    value: string
  ) {
    setInputs((values) => ({
      ...values,
      [identifier]: { value, isValid: true },
    }));
  }

  function submitHandler() {
    const amountStr = inputs.amount.value;
    const amount = parseInt(amountStr);
    const dateStr = inputs.date.value;
    const date = new Date(dateStr);
    const description = inputs.description.value;

    const isAmountValid = !isNaN(amount) && amount > 0;
    const isDateValid = date.toString() !== "Invalid Date";
    const isDescriptionValid = description.trim().length > 0;

    if (!isAmountValid || !isDateValid || !isDescriptionValid) {
      return setInputs((curr) => ({
        amount: {
          value: curr.amount.value,
          isValid: isAmountValid,
        },
        date: {
          value: curr.date.value,
          isValid: isDateValid,
        },
        description: {
          value: curr.description.value,
          isValid: isDescriptionValid,
        },
      }));
    }

    onSubmit({ amount, date, description });
  }

  return (
    <>
      <View>
        <Text style={styles.title}>Your expense</Text>
        <View style={styles.inputsRow}>
          <Input
            label="Amount"
            style={styles.input}
            error={!inputs.amount.isValid}
            textInputProps={{
              keyboardType: "decimal-pad",
              onChangeText: inputChangeHandler.bind(this, "amount"),
              value: inputs.amount.value,
            }}
          />
          <Input
            label="Date"
            style={styles.input}
            error={!inputs.date.isValid}
            textInputProps={{
              placeholder: "YYYY-MM-DD",
              maxLength: 10,
              onChangeText: inputChangeHandler.bind(this, "date"),
              value: inputs.date.value,
            }}
          />
        </View>
        <Input
          label="Description"
          error={!inputs.description.isValid}
          textInputProps={{
            multiline: true,
            onChangeText: inputChangeHandler.bind(this, "description"),
            value: inputs.description.value,
            // autoCapitalize: 'sentences', // default is sentences
            // autoComplete: false, // default is true
          }}
        />
      </View>
      <View style={styles.buttonsContainer}>
        <Button style={styles.button} mode="flat" onPress={onCancel}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={submitHandler}>
          {submitLabel}
        </Button>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginVertical: 24,
    textAlign: "center",
  },
  inputsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  input: {
    flex: 1,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
});

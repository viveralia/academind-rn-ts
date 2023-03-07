import { Expense } from "../models";

export const expenses: Expense[] = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2021-12-19"),
  },
  {
    id: "e2",
    description: "A pair of trousers",
    amount: 89.49,
    date: new Date("2022-01-15"),
  },
  {
    id: "e3",
    description: "Some bananas",
    amount: 5.99,
    date: new Date("2021-12-01"),
  },
  {
    id: "e4",
    description: "Book",
    amount: 19.99,
    date: new Date("2022-02-19"),
  },
  {
    id: "e5",
    description: "Another Book",
    amount: 18.49,
    date: new Date("2022-02-18"),
  },
];
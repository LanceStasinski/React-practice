import React, { useState } from "react";

import Expenses from "./components//Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Head First JavaScript Programming",
    amount: 35,
    date: new Date(2021, 7, 23),
  },
  {
    id: "e2",
    title: "White Board",
    amount: 100,
    date: new Date(2020, 6, 14),
  },
  {
    id: "e3",
    title: "Udacity FEND Course",
    amount: 350,
    date: new Date(2021, 3, 15),
  },
  {
    id: "e4",
    title: "Udemy React Course",
    amount: 135,
    date: new Date(2021, 7, 23),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

  const addExpenseHander = (expense) => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    })
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHander} />
      <Expenses data={expenses} />
    </div>
  );
}

export default App;

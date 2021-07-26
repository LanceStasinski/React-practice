import React, { useState } from "react";

import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpenseFilter/ExpenseFilter";

import "./Expenses.css";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2021");
  console.log(typeof filteredYear);

  const onFilterExpensesHandler = (year) => {
    setFilteredYear(year);
  };

  const filteredExpenses = props.data.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        currentSelection={filteredYear}
        onFilterExpenses={onFilterExpensesHandler}
      />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
}

export default Expenses;

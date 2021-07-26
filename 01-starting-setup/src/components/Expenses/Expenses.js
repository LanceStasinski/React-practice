import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
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
      {filteredExpenses.length === 0 ? (
        <p>No expenses found.</p>
      ) : (
        props.data.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      )}
    </Card>
  );
}

export default Expenses;

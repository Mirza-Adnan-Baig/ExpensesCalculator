import React, { useState } from "react";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  // using state...
  const [filteredYear, setFilteredYear] = useState("2021");

  // to check which year is selected....
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;

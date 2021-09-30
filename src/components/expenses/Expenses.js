import React, { useState } from "react";
import ExpensesFilter from "../AddExpenses/ExpensesFilter";
import ExpenseItem from "../expenses/ExpenseItem";
import Card from "../UI/Crad";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  const [filterdYear, setFilterdYear] = useState("2021");

  const filteredExpense = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filterdYear;
  });

  const filterChangeHandler = (selectedYear) => {
    setFilterdYear(selectedYear);
  };
 
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterdYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expense={filteredExpense}/>
        <ExpensesList expense={filteredExpense}></ExpensesList>
      </Card>
    </div>
  );
}
export default Expenses;

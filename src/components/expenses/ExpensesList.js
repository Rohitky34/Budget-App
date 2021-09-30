import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  let expenseContent = <p>No Expenses Found</p>;
  if (props.expense.length === 0) {
    return <h2 className="expenses-list__fallback"> No Expenses Found</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.expense.map((exp) => (
        <ExpenseItem
          key={exp.id}
          title={exp.title}
          amount={exp.amount}
          date={exp.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;

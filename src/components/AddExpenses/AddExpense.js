import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const AddExpense = (props) => {
  const AddExpenseDataHandler = (enterdExpense) => {
    const expenseData = {
      ...enterdExpense,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onAddExpense={AddExpenseDataHandler}></ExpenseForm>
    </div>
  );
};

export default AddExpense;

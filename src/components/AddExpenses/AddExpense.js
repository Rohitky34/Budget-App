import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const AddExpense = (props) => {
  const [isEditing, setisEditing] = useState(false);
  const AddExpenseDataHandler = (enterdExpense) => {
    const expenseData = {
      ...enterdExpense,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setisEditing(false);
  };
  const startEditing = () => {
    setisEditing(true);
  };
  const stopEditing = () => {
    setisEditing(false);
  };
  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditing}> Add Expenses</button>}
      {isEditing && (
        <ExpenseForm
          onAddExpense={AddExpenseDataHandler}
          onCancel={stopEditing}
        ></ExpenseForm>
      )}
    </div>
  );
};

export default AddExpense;

import React, {useState} from "react";
import "./ExpenseItem.css";
import Card from "../UI/Crad";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();


  return (
    <li>
      <Card className="expense-item ">
        <ExpenseDate date={props.date}></ExpenseDate>
        <div className="expense-item__description">
          <h2>{props.title}</h2>
        </div>
        <div className="expense-item__price">${props.amount}</div>
      </Card>
    </li>
  );
}
export default ExpenseItem;

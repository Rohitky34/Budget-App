import React, {useState} from "react";
import "./ExpenseItem.css";
import Card from "../UI/Crad";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("new tag");
  };
  return (
    <Card className="expense-item ">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2>
      </div>
      <div className="expense-item__price">${props.amount}</div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}
export default ExpenseItem;

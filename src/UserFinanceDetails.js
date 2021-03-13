import React from "react";
import HigherOrderComponent from "./HigherOrderComponent";

function UserFinanceDetails(props) {
  return (
    <div>
      <div>Employee Name: {props.name}</div>
      <div>Employee Salary: {props.salary}</div>
      <div>Employee Bonus: {props.bonus}</div>
    </div>
  );
}

export default HigherOrderComponent(UserFinanceDetails);

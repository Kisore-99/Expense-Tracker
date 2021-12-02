import React, { useContext } from "react";
import Transaction from "../../Transaction/Transaction";
import { GlobalContext } from "../../context/GlobalState";

import "./ExpensesList.css";

const Expenses = () => {
  const { transactions } = useContext(GlobalContext);
  const expensesList = transactions.filter((transaction) => transaction.amount < 0);
  return (
    <div className="exp-list-container">
      <h4>All Expenses</h4>
      {expensesList.map((expense) => (
        <Transaction key={expense.id} transaction={expense} content="expense" />
      ))}
    </div>
  );
};

export default Expenses;

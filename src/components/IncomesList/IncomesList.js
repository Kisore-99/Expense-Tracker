import React, { useContext } from "react";
import Transaction from "../../Transaction/Transaction";
import { GlobalContext } from "../../context/GlobalState";

import "./IncomesList.css";

const Incomes = () => {
  const { transactions } = useContext(GlobalContext);
  const incomesList = transactions.filter((transaction) => transaction.amount > 0);
  return (
    <div className="inc-list-container">
      <h4>All Incomes</h4>
      {incomesList.map((income) => (
        <Transaction key={income.id} transaction={income} content="income" />
      ))}
    </div>
  );
};

export default Incomes;

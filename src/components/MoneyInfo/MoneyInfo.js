import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import moneyFormatter from "../../helpers/moneyFormatter";

import "./MoneyInfo.css";

const MoneyInfo = () => {
  const { transactions } = useContext(GlobalContext);
  const incomesList = transactions
    .map((transaction) => transaction.amount)
    .filter((amt) => amt > 0);
  const totalIncome = incomesList.reduce((acc, cur) => (acc += cur), 0);

  const expensesList = transactions
    .map((transaction) => transaction.amount)
    .filter((amt) => amt < 0);
  const totalExpense = expensesList.reduce((acc, cur) => (acc += Math.abs(cur)), 0);

  return (
    <div className="bal-container">
      <div className="bal-info">
        <h4 className="bal-header">
          Balance <span className="bal-amount">{moneyFormatter(totalIncome - totalExpense)}</span>
        </h4>
      </div>
      <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p className="plus">{moneyFormatter(totalIncome)}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="minus"> {moneyFormatter(totalExpense)}</p>
        </div>
      </div>
    </div>
  );
};

export default MoneyInfo;

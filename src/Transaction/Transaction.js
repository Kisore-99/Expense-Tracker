import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import moneyFormatter from "../helpers/moneyFormatter";

import "./Transaction.css";

const Transaction = ({ transaction, content }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  return (
    <div className="transaction-container">
      <ul className="list">
        <li className={content === "income" ? "income" : "expense"}>
          <p>
            <span className="del-btn" onClick={() => deleteTransaction(transaction.id)}>
              X
            </span>
            {transaction.source}
          </p>
          <p>{moneyFormatter(Math.abs(transaction.amount))}</p>
        </li>
      </ul>
    </div>
  );
};

export default Transaction;

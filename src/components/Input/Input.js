import React, { useState, useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

import "./Input.css";

const Input = () => {
  const [source, setSource] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);
  const submitHandler = (e) => {
    e.preventDefault();
    addTransaction({
      id: Math.random(Math.floor() * 1000000),
      source,
      amount: +amount,
    });
    setSource("");
    setAmount(0);
  };

  return (
    <div className="input-container">
      <h3>Add New</h3>
      <form onSubmit={submitHandler}>
        <div className="form-control">
          <label htmlFor="source">Source</label>
          <input
            type="text"
            placeholder="Enter source"
            value={source}
            onChange={(e) => setSource(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            placeholder="Enter Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button className="add-btn">Add</button>
      </form>
    </div>
  );
};

export default Input;

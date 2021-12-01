import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const { addTransaction } = useContext(GlobalContext);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(+amount, typeof +amount);
    addTransaction({
      id: Math.random(Math.floor() * 1000000),
      text,
      amount: +amount,
    });
    setText("");
    setAmount(0);
  };

  return (
    <>
      <h3>Add new </h3>
      <form onSubmit={submitHandler}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            placeholder="Enter Text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            placeholder="Enter Number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </>
  );
};

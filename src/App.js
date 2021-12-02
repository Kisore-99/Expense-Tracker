import React from "react";
import Input from "./components/Input/Input";
import MoneyInfo from "./components/MoneyInfo/MoneyInfo";
import IncomesList from "./components/IncomesList/IncomesList";
import ExpensesList from "./components/ExpensesList/ExpensesList";
import { GlobalProvider } from "./context/GlobalState";

import "./App.css";

function App() {
  return (
    <GlobalProvider>
      <div className="main-container">
        <Input />
        <MoneyInfo />
      </div>
      <div className="transaction-list">
        <IncomesList />
        <ExpensesList />
      </div>
    </GlobalProvider>
  );
}

export default App;

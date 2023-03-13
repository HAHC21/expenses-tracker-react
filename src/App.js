import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

import { useState } from "react";

const dummy_expenses = [
  {
    date: new Date(2022,2,28),
    title: "Car Insurance",
    amount: 294.67,
    id: Math.random().toString(36)
  },
  {
    date: new Date(2023,0,3),
    title: "Mortgage Payment",
    amount: 778.56,
    id: Math.random().toString(36)
  },
  {
    date: new Date(2021,1,15),
    title: "Groceries",
    amount: 137.40,
    id: Math.random().toString(36)
  }
]

function App() {

  const [expenses, setExpenses] = useState(dummy_expenses)

  function saveNewExpense(expense) {
    setExpenses((latestExpenses) => {
      return [expense, ...latestExpenses]
    })
  }

  return (
    <div className="expense-tracker-container">
      < NewExpense onSaveExpense={saveNewExpense} />
      < Expenses expenses={expenses} />
    </div>
  );
}

export default App;

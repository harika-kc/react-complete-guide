import { useState } from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  const [expenses, setExpenses] = useState([
    { title: 'Toilet Paper', amount: '94.12', date: new Date(2020, 8, 12) },
    { title: 'New TV', amount: '799.49', date: new Date(2021, 2, 10) },
    { title: 'Car Insurance', amount: '294.67', date: new Date(2021, 4, 22) },
    { title: 'New Desk', amount: '450', date: new Date(2021, 6, 2) },
    { title: 'Bike Insurance', amount: '124.12', date: new Date(2022, 8, 20) }
  ])

  const updateUserEnteredData = (expenseData) => {
    setExpenses((prevExpenses) => [
      expenseData,
      ...prevExpenses
    ])
  }

  return (
    <div>
      <NewExpense userExpenseData = {updateUserEnteredData} />
      <Expenses expense={expenses} />
    </div>
  );
}

export default App;

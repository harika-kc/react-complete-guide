import React, { useState } from 'react'
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter'
import Card from '../UI/Card'
import ExpensesList from './ExpenseList'
import './Expenses.css'

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState('2020');

  const filteredExpenseYearHandler = (year) => {
    setSelectedYear(year);
  }

  const filteredExpenses = props.expense.filter((item) => {
    return item.date.getFullYear().toString() === selectedYear
  });

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter selected={selectedYear} onFilteredExpenseYear={filteredExpenseYearHandler} />
        <ExpensesList expenseList={filteredExpenses} />
      </Card>
    </div>
  )
}

export default Expenses;
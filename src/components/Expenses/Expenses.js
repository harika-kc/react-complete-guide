import React, { useState } from 'react'
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter'
import Card from '../UI/Card'
import ExpenseItem from './ExpenseItem'
import './Expenses.css'

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState('');

  const filteredExpenseYearHandler = (year) => {
    setSelectedYear(year);
  }
  console.log('selected year from expense filter', selectedYear)
  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter onFilteredExpenseYear={filteredExpenseYearHandler} />
        {props.expense.map((item, id) => (
          <ExpenseItem key={id} title={item.title} date={item.date} amount={item.amount} />
        ))}
      </Card>
    </div>
  )
}

export default Expenses;
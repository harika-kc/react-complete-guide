import React, { useState } from 'react'
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter'
import Card from '../UI/Card'
import ExpenseItem from './ExpenseItem'
import './Expenses.css'

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState('');

  const filteredExpenseYearHandler = (year) => {
    setSelectedYear(year);
    console.log('selected year from expense filter', year)
  }
  return (
    <div>
      <ExpensesFilter onFilteredExpenseYear = {filteredExpenseYearHandler} />
      <Card className='expenses'>
        {props.expense.map((item) => (
          <ExpenseItem title={item.title} date={item.date} amount={item.amount} />
        ))}
      </Card>
    </div>
  )
}

export default Expenses;
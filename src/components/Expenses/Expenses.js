import React, { useState } from 'react'
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter'
import Card from '../UI/Card'
import ExpenseItem from './ExpenseItem'
import './Expenses.css'

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState('2020');
  let [filteredExpenses, setFilteredExpenses] = useState([]);
  let [isYearSelected, setIsYearSelected] = useState(false);

  const filteredExpenseYearHandler = (year) => {
    setIsYearSelected(true);
    setSelectedYear(year);
    setFilteredExpenses(props.expense.filter((item) => {return item.date.getFullYear().toString() === year}))
  }

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter selected={selectedYear} onFilteredExpenseYear={filteredExpenseYearHandler} />
        {!isYearSelected ?
         props.expense.map((item, id) => (
          <ExpenseItem key={id} title={item.title} date={item.date} amount={item.amount} />
        ))
        : filteredExpenses.map((item, index) => (
          <ExpenseItem key={index} title={item.title} date={item.date} amount={item.amount} />
        ))
      }
      </Card>
    </div>
  )
}

export default Expenses;
import React from 'react'
import ExpenseItem from './ExpenseItem'
import './Expenses.css'

export default function Expenses(props) {
  return (
    <div className='expenses'>
      <ExpenseItem title={props.expense[0].title} date={props.expense[0].date} amount={props.expense[0].amount} />
      <ExpenseItem title={props.expense[1].title} date={props.expense[1].date} amount={props.expense[1].amount} />
      <ExpenseItem title={props.expense[2].title} date={props.expense[2].date} amount={props.expense[2].amount} />
      <ExpenseItem title={props.expense[3].title} date={props.expense[3].date} amount={props.expense[3].amount} />
      <ExpenseItem title={props.expense[4].title} date={props.expense[4].date} amount={props.expense[4].amount} />
    </div>
  )
}

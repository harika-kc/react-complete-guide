import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate:''
  });

  const titleChangeHandler = (event) => {
    //this approach may fetch incorrect values for ...userInput
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value
    // })

    //prevState approach, React guarantees that exact old values will be fetched and updated
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredTitle: event.target.value
      }
    })
  }

  const amountChangeHandler = (event) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredAmount: event.target.value
      }
    })
  }

  const dateChangeHandler = (event) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredDate: event.target.value
      }
    })
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const enteredExpenseData = {
      title: userInput.enteredTitle,
      amount: userInput.enteredAmount,
      date: new Date(userInput.enteredDate)
    }
    props.getEnteredExpenseData(enteredExpenseData); //child-parent props passing approach
    setUserInput({
      enteredTitle: '',
      enteredAmount: '',
      enteredDate: ''
    })
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type='text' value={userInput.enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amout</label>
          <input type='number' value={userInput.enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type='date' value={userInput.enteredDate} min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit" onClick={props.cancelExpense}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'

const NewExpense = (props) => {
  const [showFormContent, setShowFormContent] = useState(false);

  const enteredExpenseDataHandler = (enteredData) => {
    const enteredExpenseData = {
      ...enteredData,
      id: Math.random().toString()
    }
    props.userExpenseData(enteredExpenseData); //child-parent props passing approach
  }

  const newExpenseFormHandler = () => {
    setShowFormContent(true);
  }

  const cancelExpenseFormHandler = () => {
    setShowFormContent(false)
  }

  return (
    <div className="new-expense">
      {!showFormContent ?
        <div>
          <button type="submit" onClick={newExpenseFormHandler}>Add New Expense</button>
        </div> :
        <ExpenseForm getEnteredExpenseData={enteredExpenseDataHandler} cancelExpense={cancelExpenseFormHandler} />
      }
    </div>
  );
}

export default NewExpense;
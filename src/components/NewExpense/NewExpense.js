import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'

const NewExpense = (props) => {

  const enteredExpenseDataHandler = (enteredData) => {
    const enteredExpenseData = {
      ...enteredData,
      id: Math.random().toString()
    }
    props.userExpenseData(enteredExpenseData); //child-parent props passing approach
  }

  return ( 
    <div className="new-expense">
      <ExpenseForm getEnteredExpenseData = {enteredExpenseDataHandler} />
    </div>
   );
}
 
export default NewExpense;
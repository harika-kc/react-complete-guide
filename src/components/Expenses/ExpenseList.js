import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

const ExpensesList = (props) => {
  let expenseContent;

  if(props.expenseList.length > 0) {
    expenseContent = props.expenseList.map((item, index) => (
      <ExpenseItem key={index} title={item.title} date={item.date} amount={item.amount} />
    ))
  } else {
    expenseContent = <h2 className="expenses-list__fallback">Found No Expenses.</h2>
  }

  return ( 
    <ul className="expenses-list">
      {expenseContent}
    </ul>
   );
}
 
export default ExpensesList;
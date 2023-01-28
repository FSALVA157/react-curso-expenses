import ExpenseItem from "./ExpenseItem"
import './expensesList.css'


export const ExpensesList = props => {

  return (

    (props.items.length === 0)?
      <h2 className="expenses-list__fallback">No hay items.</h2>:
      <ul className="expenses-list">
          {props.items.map( expense => 
            <ExpenseItem key={expense.id} expense={expense} />
         )}  

      </ul>
    
  )
}

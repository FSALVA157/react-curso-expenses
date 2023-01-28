import { useState } from "react";
import { ExpenseForm } from "./ExpenseForm";
import  "./newExpense.css";

const NewExpense = ({onAddNewExpense}) => {
  const [open, setOpen] = useState(false)

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    }
    onAddNewExpense(expenseData)
    setOpen(false)
  }

  const openEditMode = ()=>{
    setOpen(true);
  }

  const closingEditMode=()=>{
    setOpen(false);
  }

  let vista = (open)? 
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelForm={closingEditMode}/>:
      <button onClick={openEditMode}>Add New Expense</button>

  return (
    <div className="new-expense">
      {
        vista
      }        
    </div>
  )
}

export default NewExpense;

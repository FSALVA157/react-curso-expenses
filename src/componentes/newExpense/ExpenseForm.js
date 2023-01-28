import { useState } from "react";
import "./expenseForm.css";

export const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("")

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);    
  };

  const dateChangeHandler = (e)=>{
    setEnteredDate(e.target.value);
  }
  
  // const [userInput, setUserInput] = useState({
  //   enteredTitle:"",
  //   enteredAmount:"",
  //   enteredDate:"",
  // })

  // const titleChangeHandler = (event) =>{
  //   setUserInput((prevState)=>{
  //     return{
  //       ...prevState,
  //       enteredTitle:event.target.value
  //     }
  //   })
  // }

  // const amountChangeHandler = (event) =>{
  //   setUserInput((prevState)=>{
  //     return{
  //       ...prevState,expenses.push(newExpense);
  //     return{
  //       ...prevState,
  //       enteredDate:event.target.value
  //     }
  //   })
  // }

  const handleSubmitForm = (e)=>{
    e.preventDefault();
    const formData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    }
    props.onSaveExpenseData(formData)
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  }

  return (
    <form onSubmit={handleSubmitForm}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
             />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}            
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
             type="date"
             min="2020-01-01"
             max="2023-12-31"
             value={enteredDate}
             onChange={dateChangeHandler}             
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
          <button onClick={props.onCancelForm}>Cancel</button>
        </div>
      </div>
    </form>
  );
};

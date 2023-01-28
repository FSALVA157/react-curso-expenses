//import Card from "../UI/Card";
import { useState } from "react";
import Card from "../UI/Card";
import './expenses.css';
import { ExpensesChart } from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";
import { ExpensesList } from "./ExpensesList";

const Expenses = ({expenses}) => {
  const [filterYear, setFilterYear] = useState('2020')

  const handlerUpdateYear= year =>
    setFilterYear(year)  
  
  const expensesFiltered= expenses.filter( expense =>
     expense.date.getFullYear().toString() === filterYear
  )
    
  return (
    <li>
    <Card className="expenses">      
      <ExpensesFilter actual={filterYear} onUpdateYear={handlerUpdateYear}/>
      <ExpensesChart expenses={expensesFiltered}/>
      <ExpensesList items={expensesFiltered}/>
          {/* {
            (expensesFiltered.length === 0)&& <p style={{color: 'white'}}>No hay items.</p>
          }
          {
            expensesFiltered.map((expense)=>{
              return <ExpenseItem key={expense.id} expense={expense} />
            })
        } */}
          
          {/* {
            (expensesFiltered.length === 0)?<p style={{color: 'white'}}>No hay items.</p>: expensesFiltered.map((expense)=>{
              return <ExpenseItem key={expense.id} expense={expense} />
            })
          } */}
          {/* {
            expensesFiltered.map((expense)=>{
              return <ExpenseItem key={expense.id} expense={expense} />
            })
          } */}
  
      {/* {expenses.map((expense) => {
            //return <ExpenseItem key={expense.id} expense={expense} />
         if (parseInt(expense.date.getFullYear()) === parseInt(filterYear)) {return <ExpenseItem key={expense.id} expense={expense} />};
      })} */}
    </Card>
    </li>
  )
}

export default Expenses
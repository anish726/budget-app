import React, { useState } from 'react'
import Budget from './component/Budget'
import ExpenseTotal from './component/ExpenseTotal'
import Remain from './component/Remain'
import 'bootstrap/dist/css/bootstrap.min.css';
import ExpenseList from './component/ExpenseList';
import AddForm from './component/AddForm';
import { AppProvider } from './component/context/AppContext';


function App() {
   
  return(



    <AppProvider>
  <div className="container">
     
     <h1 className="mt-3 ">My Budget Planner</h1>
     <div className="row mt-3">
       <div className="col-sm">
    <Budget/>
    </div>
    <div className="col-sm">
    
      <Remain/>
    </div>
    <div className="col-sm">
    <ExpenseTotal/>
  
    </div>
    </div>
     
     <h2 className="mt-3">Expenses</h2>
     <div className="row mt-3">
       <div className="col-sm">
  <ExpenseList/>
       </div>
    </div>
    <h2 className="mt-3">Add Expenses</h2>
    <div className=" mt-3">
       <div className="col-sm">
    <AddForm/>
       </div>
    </div>
  </div>
  </AppProvider>


  )
 
}

export default App

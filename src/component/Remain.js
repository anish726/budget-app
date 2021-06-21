import React, { useContext } from 'react'
import { AppContext } from './context/AppContext';

function Remain() {

    const {expenses, budget} = useContext(AppContext)
    const totalExpense = expenses.reduce((total, item) => {
        return (total = total+ item.cost);
    },0)
    
     const alertType = totalExpense > budget ? 'alert-danger' : 
     'alert-success';
    return (
        <div className={`alert ${alertType}`}>
         <span>Remain: ${budget - totalExpense}</span>
        </div>
    )
}

export default Remain;
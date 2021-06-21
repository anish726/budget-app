import React, { useContext } from 'react'
import { AppContext } from './context/AppContext';

function ExpenseItem(props) {

    const {dispatch} = useContext(AppContext)

    const handleDelete = ()=>{
        dispatch({
            type:'DELETE_EXPENSE',
            payload:props.id
        })
    }
    return (
        <li className='list-group-item d-flex justify-content-between align-items-center'>
           {props.name}
           <div>
    <span className="'badge badge-primary badge-pill mr-3'">${props.cost}</span>
           <button className="m-2  btn btn-danger " onClick={handleDelete}>x</button>
           </div>
        
    </li>
    )
}
export default  ExpenseItem;
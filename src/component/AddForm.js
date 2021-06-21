import React, { useState, useContext } from 'react'
import { AppContext } from './context/AppContext';
import { v4 as uuidv4} from 'uuid'
function AddForm() {

  const {dispatch} =useContext(AppContext);

    const  [name, setName] = useState('');
    const [cost, setCost] = useState('');
   
     const AddInfo = (e) =>{
         e.preventDefault();
         const expense = {
             id: uuidv4(),
             name:name,
             cost: parseInt(cost),
         };
         dispatch({
             type:'ADD_EXPENSE',
             payload: expense
         })
     }
  

    return (
        <form onSubmit={AddInfo}>
            <div className="row">
                <div className="col-sm">
                    <lable for="name">Name</lable>
                    <input type="text"
                    required="required"
                    className="form-control"
                    id="name"
                    value={name} onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className="col-sm">
                    <lable for="cost">Cost</lable>
                    <input type="number"
                    required="required"
                    className="form-control"
                    id="cost" value={cost} onChange= {(e) => setCost(e.target.value)}/>
                </div>
                <div className=" mt-2 p-2 col-sm">
                   <button className=" btn-lg btn btn-primary">Add Expense</button>
                </div>
                
            </div>
        </form>
    )
}


export default AddForm

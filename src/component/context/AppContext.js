 import {createContext, useReducer} from 'react'


const ApppReducer =(state, action) =>{

    switch(action.type) {

         case 'ADD_EXPENSE':
         return {
            ...state,
            expenses: [...state.expenses, action.payload],
        };
         
        case 'DELETE_EXPENSE':
        return{
            ...state,
            expenses: state.expenses.filter((expense) =>
                expense.id !== action.payload,
            )
        }
        default:
            return state;
    }
}


const initialState={
    budget:4000,
    expenses:[
        {
            id:2, name:"food", cost:23
        },
        {
            id:3, name:"books", cost:60
        },
    ],

};
  
export const AppContext = createContext();
   
 export const AppProvider = (props) =>{
   const [state, dispatch] = useReducer(ApppReducer, initialState)
     
   const {budget,expenses} = state;
    return(
        <AppContext.Provider value={{
            budget,
            expenses,
            dispatch,
        }}>
            {props.children}
        </AppContext.Provider>
    )



}
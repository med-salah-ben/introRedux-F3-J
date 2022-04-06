import { INCREMENT_Counter,DECREMENT_COUNTER } from "../constant/actionTypes";


const initialState = {
    count : 0
}

const countReducer = (state=initialState,{type, payload})=>{
    switch (type) {
        case INCREMENT_Counter:
  
           return {...state,count:state.count + payload}
           
        case DECREMENT_COUNTER:
            return {...state,count:state.count - 1 }   
    
        default:
           return state
    }
}

export default countReducer
import {DECREMENT_COUNTER,INCREMENT_Counter} from "../constant/actionTypes"

export const increment =(newNumber)=>{
    return {
        type: INCREMENT_Counter,
        payload: newNumber
    }
}

export const decrement = () => {
    return {
        type:DECREMENT_COUNTER
    }
}
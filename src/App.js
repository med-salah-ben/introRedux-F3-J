import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux"
import {increment, decrement} from "./JS/actions/countActions"

function App() {
  const [num, setNum] = useState(0)
  const dispatch = useDispatch();
  const count = useSelector((state)=>state.countReducer.count)
  console.log(count)

 const handleChange = (e)=>{
   e.preventDefault()
   console.log("f",num)
   dispatch(increment(Number(num)))
   console.log("s",num)
 }

  return (
    <div>
      <form onSubmit={handleChange}>
        <input type="number" value={num} name="num" onChange={(e)=>setNum(e.target.value)} />
      <button onClick={()=>dispatch(decrement())} >-</button>
      <h1> {count} </h1>
      <button onClick={handleChange} >+</button>
      </form>
    </div>
  );
}

export default App;

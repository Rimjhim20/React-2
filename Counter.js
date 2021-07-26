import React,{useState}  from "react";
import CounterJSX from "./CounterJSX";

const Counter =() =>{
    const initialState=0;
     const [count , setCount] = useState(initialState);

    const incrementValueByEleven = () =>{
        for(let i=0;i<11;i++)

        setCount((prevCount) => prevCount +1)
    };


    return(
        <div>
           <CounterJSX count={count} setCount={setCount} incrementValueByEleven={incrementValueByEleven}/>
        </div>
   )
};
export default Counter;
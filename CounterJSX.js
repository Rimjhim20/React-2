import React from 'react'

const CounterJSX = ({count,setCount,incrementValueByEleven}) => {
    return (
        <div>
            <h1>Counter</h1>
           <h2>{count}</h2>
           <button className="btn" onClick={()=> setCount(count +1)}>Increment</button>
           <button className="btn" onClick={()=> setCount(0)}>Reset</button>
           <button className="btn" onClick={()=> setCount(count-1)}>Decrement</button>
           <button  className="btn" onClick={ incrementValueByEleven}>Increment by 11</button>
        </div>
    )
}

export default CounterJSX

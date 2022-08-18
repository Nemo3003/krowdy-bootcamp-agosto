import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export const Sum = ({initialValue}) => {
   const [count, setCount]= useState(0)
   const [num, setNum] = useState(0)

   const handleIncrement = () => {
        setCount(count+1)
   }
    const handleDecrement = () => {
        setCount(count-1)
    }
    const handleIncrementNum = () => {
        setNum(num+1)
    }
    const handleDecrementNum = () => {
        setNum(num-1)
    }

    return(
        <div>
            <h1>{initialValue}</h1>
            <h2>num:{num}</h2>
            <h3>count:{count}</h3>
            <button onClick={handleIncrement}>Count +</button>
            <button onClick={handleDecrement}>Count -</button>
            <button onClick={handleIncrementNum}>Num +</button>
            <button onClick={handleDecrementNum}>Num -</button>
        </div>
    )
}

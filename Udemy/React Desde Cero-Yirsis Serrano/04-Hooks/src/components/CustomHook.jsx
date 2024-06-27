import React,{useState} from 'react'
import { useCounter } from './hooks/useCounter';

const CustomHook = () => {

  const [counter,increment,decrement] =  useCounter(0,1000);
  console.log(counter);
  //const [counter,setCounter] = useState(5);
  /*const increment = () => {
    setCounter(counter+1);
  }

  const decrement = () => {
    setCounter(counter-1);
  }*/
  return (
    <>
     <h1>CustomHook: {counter}</h1>
      <hr/>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
    </> 
  )
}

export default CustomHook

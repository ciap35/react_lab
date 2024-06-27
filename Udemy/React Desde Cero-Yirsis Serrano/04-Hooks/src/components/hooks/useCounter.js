import {useState} from 'react'

export const useCounter = (initValue,range=1) => {
    const [counter,setCounter] = useState(initValue);

    const increment = () =>{
        setCounter(counter+range);
    };

    const decrement = () =>{
        setCounter(counter-range);
    };

    return [counter,increment,decrement];
};
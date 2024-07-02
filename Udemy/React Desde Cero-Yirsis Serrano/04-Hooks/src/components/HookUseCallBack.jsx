import React, { useState, useCallback } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  // Definimos una función que se memoriza usando useCallback
  const increment = useCallback(() => {
    setCount(prevCount => prevCount + 1);
    console.log("useCallback function is called");
  }, []); // Como segundo argumento pasamos un arreglo vacío, indicando que no tiene dependencias


  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Counter;
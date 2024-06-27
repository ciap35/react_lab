import React, { useState } from 'react';

const HookState = () => {
  // 1. Define the initial state of the counter using useState
  const [count, setCount] = useState(0);

  // 2. Create a function to handle the button click event
  const incrementCount = () => {
    setCount(count + 1); // Update the state of the counter
  };

  
  // 3. Create a function to handle the click event on the decrement button
  const decrementCount = () => {
    setCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0)); // Update the counter state with conditional logic
  };

  // 3. Render the component and display the counter along with the button
  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
    </div>
  );
};

export default HookState;

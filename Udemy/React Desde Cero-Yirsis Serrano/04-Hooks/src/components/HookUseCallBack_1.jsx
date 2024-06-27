import React, { useState, useCallback } from 'react';

const Parent = () => {
  const [count, setCount] = useState(0);

  // Memoize the handleClick function
  const handleClick = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  return (
    <div>
      <Child handleClick={handleClick} />
      <p>Count: {count}</p>
    </div>
  );
};

const Child = React.memo(({ handleClick }) => {
  console.log('Child rendered');
  return <button onClick={handleClick}>Increment</button>;
});

export default Parent;

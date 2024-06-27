import React, { useState, useCallback } from 'react';

// Memoize the Child component
const Child = React.memo(({ label }) => {
  console.log('Child rendered'); // This will log only when 'label' changes
  return <p>{label}</p>;
});

const Parent = () => {
  const [count, setCount] = useState(0);
  const [label, setLabel] = useState("Initial Label");

  // Increment function
  const increment = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  // Update label function
  const updateLabel = useCallback(() => {
    setLabel("Updated Label");
  }, []);

  return (
    <div>
      <button onClick={increment}>Increment Count</button>
      <button onClick={updateLabel}>Update Label</button>
      <p>Count: {count}</p>
      <Child label={label} /> {/* Child will not re-render when 'count' changes */}
    </div>
  );
};

export default Parent;

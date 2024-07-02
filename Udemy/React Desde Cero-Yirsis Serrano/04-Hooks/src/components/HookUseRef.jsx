import React, { useRef } from 'react'

const HookUseRef = () => {

  const txtArea = useRef(null);

  const handleRef = () => {
    console.log("control ref: ",txtArea,"control value: ",txtArea.current.value);    
  };

  return (
    <div>
      <h3 onClick={handleRef}>Click here to reveal the value on console</h3>
      
      <textarea ref={txtArea} placeholder="leave a message" name="" id="" cols="auto" rows="auto"></textarea>
    </div>
  );
};

export default HookUseRef
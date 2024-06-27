import React, { useState,useRef } from 'react'
import Display from './Display';
const HookUseMemorize = () => {
  const [lampSwitch,setLampState] = useState(true);

  
    const handleTurnOn = () => {
        setLampState(true);
    };

    const handleTurnOff = () => {
        setLampState(false);
    };
  
   
    return (
      <div>
        <Display state={lampSwitch} />
        <div>
          <button onClick={handleTurnOn}>
            Click me to turn ON the light: {lampSwitch}
          </button>
        </div>
        <div>
          <button onClick={handleTurnOff}>
            Click me to turn OFF the light: {lampSwitch}
          </button>
        </div>
      </div>
    );
  };
  


export default HookUseMemorize

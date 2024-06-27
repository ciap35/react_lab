import { useState, useEffect } from 'react';

const HookUseEffect = () => {
  const [state, setState] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setState((prevState) => prevState + 1);
    }, 1000);

    return () => clearInterval(interval); // Limpiar el intervalo cuando el componente se desmonte
  }, []); // El array vacío asegura que el efecto solo se ejecute una vez cuando el componente se monte

  return (
    <div>
      <p>HookUseEffect: {state}</p>
    </div>
  );
};

export default HookUseEffect;

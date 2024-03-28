import './App.css';
import './stylesheets/Boton.css';
import './stylesheets/Contador.css';
import Contador from './components/Contador.js';
import Boton from './components/Boton.js';
import { useState } from 'react';

import freeCodeCampLogo from './images/freecodecamp-logo.png';

function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics+1);
  }

  const reiniciarContador = () => {
    setNumClics(0);
  }

  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
      <img
        className='freecodecamp-logo'
        src={freeCodeCampLogo}
        alt='Logo de freeCodeCamp'
        />
      </div>
      <div className='contenedor-principal'>
        <div className='contador'>
          <Contador numClics={numClics}/>
        </div>
        <Boton 
          texto='Clic' 
          esBotonDeClic={true}
          manejarClic={manejarClic}/>

        <Boton 
          texto='Reiniciar' 
          esBotonDeClic={false}
          manejarClic={reiniciarContador}/>  
      </div>
    </div>
  );
}

export default App;

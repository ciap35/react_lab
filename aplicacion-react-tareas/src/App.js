import './App.css';
import './stylesheets/Tarea.css';
import freeCodeCampLogo from './images/freecodecamp-logo.png';
import ListaDeTareas from './components/ListaDeTareas.js';

function App() {
  return (
    <div className='aplicacion-tareas'>
      <div className='freecodecamp-logo-contenedor'>
        <img  
        src={freeCodeCampLogo}
        className='freecodecamp-logo'
        alt='Logo' />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <ListaDeTareas/>
      </div>
    </div>
  );
}

export default App;

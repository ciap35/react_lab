import React from 'react';
import '../stylesheets/Testimonio.css';

//export function Testimonio() { //Exportación nombrada
function Testimonio(props) { //Exportación por defecto
    return (
      <div className='contenedor-testimonio'>
        <img
          className='imagen-testimonio'
          //src={require('../images/testimonio-1.png')}
          src={require(`../images/testimonio-${props.imagen}.png`)}
          alt={`${props.alt != '' ? props.alt : "imagen"}`}
        />
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'><strong>{props.nombre}</strong> en {props.pais}</p>
        <p className='cargo-testimonio'>{props.cargo} en <strong>{props.empresa}</strong></p>
        <p className='texto-testimonio'>"{props.testimonio}"</p>
      </div>
      </div>
    );
}

export default Testimonio; //Exportación por defecto
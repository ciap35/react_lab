import React from 'react';
import '../stylesheets/Testimonio.css';

//export function Testimonio() { //Exportación nombrada
function Testimonio() { //Exportación por defecto
    return (
      <div className='contenedor-testimonio'>
        <img
          className='imagen-testimonio'
          src={require('../images/testimonio-1.png')}
          alt='testimonial from our student'
        />
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'>John Doe in Sweden</p>
        <p className='cargo-testimonio'>Software Engineer</p>
        <p className='texto-testimonio'>It's scary to change careers. I only gained the confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a software engineer. freeCodeCamp changed my life.</p>
      </div>
      </div>
    );
}

export default Testimonio; //Exportación por defecto
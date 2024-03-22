import React from 'react';

//export function Testimonial() {
function Testimonial() {
    return (
      <div className='container'>
        <img
          className='image-testimonial'
          src={require('../images/testimonial-1.png')}
          alt='testimonial from our student'
        />
      <div className='container-testimonial'>
        <p className='person'>John Doe in Sweden</p>
        <p className='person-role'>Software Engineer</p>
        <p className='person-testimonial'>Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida.</p>
      </div>
      </div>
    );
}

export default Testimonial;
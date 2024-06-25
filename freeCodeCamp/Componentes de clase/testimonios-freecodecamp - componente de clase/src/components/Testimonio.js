import React from 'react';
import '../stylesheets/Testimonio.css';

/*
*REFACTOR A COMPONENTE DE CLASE
*Definir class
*Extendender de React.Component
*implementar render(){ return (); }
*/

class Testimonio extends React.Component{
  render(){
    return (
      <div className='contenedor-testimonio'>
      <img
        className='imagen-testimonio'
        src={require(`../images/testimonio-${this.props.imagen}.png`)}
        alt={`${this.props.alt != '' ? this.props.alt : "imagen"}`}
      />
    <div className='contenedor-texto-testimonio'>
      <p className='nombre-testimonio'><strong>{this.props.nombre}</strong> en {this.props.pais}</p>
      <p className='cargo-testimonio'>{this.props.cargo} en <strong>{this.props.empresa}</strong></p>
      <p className='texto-testimonio'>"{this.props.testimonio}"</p>
    </div>
    </div>
    );
  }
}

export default Testimonio;

/*function Testimonio(props) { 
    return (
      <div className='contenedor-testimonio'>
        <img
          className='imagen-testimonio'
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

 //Exportación por defecto*/
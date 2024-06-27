import React, { useState } from 'react';
import PropTypes from 'prop-types';

const InputNumber = ({ name, onChange }) => {
  const [number, setNumber] = useState(''); // Estado inicial vacío para manejar entradas flexibles

  const handleChange = (e) => {
    const value = e.target.value;
    // Validar si el valor ingresado es un número válido
    if (/^[+-]?([0-9]*[.])?[0-9]+$/.test(value) || value === '') {
      setNumber(value); // Actualizar el estado con el valor ingresado
      onChange(parseFloat(value)); // Llamar a onChange con el valor convertido a float
    }
  };

  return (
    <>
      <label>
        {name} : <input type="number" value={number} onChange={handleChange} />
      </label>
      <br />
    </>
  );
};

InputNumber.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputNumber;
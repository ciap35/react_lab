import React, { useEffect, useState } from 'react';

const Display = React.memo(({ state }) => {
  // State para almacenar los colores generados
  const [colors, setColors] = useState({
    backgroundColor: '',
    color: ''
  });

  // Función para generar colores pasteles aleatorios
  const generatePastelColor = () => {
    const pastelColors = [
      '#BFD8B8', // Pastel Green
      '#F0C987', // Pastel Yellow
      '#F4A7B9', // Pastel Pink
      '#B3D6C6', // Pastel Blue
      '#E6E2CF', // Pastel Cream
      '#E2D4BA'  // Pastel Beige
      // You can add more pastel colors according to your preferences
    ];

    const backgroundColor = pastelColors[Math.floor(Math.random() * pastelColors.length)];

    let textColor = '#000'; // Default to black text
    // Simple contrast logic: white text for dark backgrounds, black text for light backgrounds
    if (backgroundColor === '#E6E2CF' || backgroundColor === '#F0C987' || backgroundColor === '#BFD8B8') {
      textColor = '#000';
    } else if (backgroundColor === '#B3D6C6' || backgroundColor === '#E2D4BA' || backgroundColor === '#F4A7B9') {
      textColor = '#FFF';
    }

    return {
      backgroundColor,
      color: textColor
    };
  };

  // useEffect con state como dependencia para asegurarnos de que se ejecute cuando state cambie
  useEffect(() => {
    console.log("Display Component rendered or memoized");
    console.log("Loading Display Component");

    // Obtener colores aleatorios y actualizar el estado
    const { backgroundColor, color } = generatePastelColor();
    setColors({ backgroundColor, color });

    // Aquí podrías ejecutar cualquier otra lógica que desees
  }, [state]);

  return (
    <div style={{ backgroundColor: colors.backgroundColor, color: colors.color }}>
      <p>Lamp is: {state ? "true" : "false"}</p>
    </div>
  );
});

export default Display;

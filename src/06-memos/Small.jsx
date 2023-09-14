// Importamos el método "memo" de React para optimizar el rendimiento.
import { memo } from 'react';

// Definimos el componente funcional "Small".
export const Small = memo(({ value }) => {
  // Este componente recibe una única prop llamada "value".

  // Imprimimos un mensaje en la consola cada vez que el componente se vuelve a renderizar.
  console.log("Me volvi a dibujar :(");

  // Retornamos JSX que muestra el valor pasado como prop.
  return (
    <small>{value}</small>
  );
});

// Exportamos el componente "Small" envuelto en "memo" para optimizar el rendimiento.

import React from "react";

// Utilizamos React.memo para memorizar este componente y evitar
// que se vuelva a renderizar innecesariamente cuando las props no cambian.
export const ShowIncrement = React.memo(({ increment }) => {
  // Este mensaje se imprimirá cada vez que el componente se vuelva a renderizar.
  console.log('Me volví a generar :(');

  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        // Cuando se hace clic en el botón, se ejecuta la función increment
        // que se pasa como prop desde el componente padre. Además, estamos pasando
        // un argumento de 5 a la función increment.
        increment(5);
      }}
    >
      Increment
    </button>
  );
});

import { useRef } from "react";

export const FocusScreen = () => {
  // Se crea una referencia utilizando useRef()
  const inputRef = useRef();

  // Función que se ejecuta cuando se hace clic en el botón
  const onClick = () => {
    // Se utiliza la referencia para seleccionar el elemento input
    inputRef.current.select();
  };

  return (
    <>
      <div>Focus Screen</div>
      <hr />
      {/* Se asigna la referencia inputRef al elemento input */}
      <input
        ref={inputRef}
        type="text"
        placeholder="Ingrese su nombre"
        className="form-control"
      />

      {/* Botón que llama a la función onClick al hacer clic */}
      <button className="btn btn-primary mt-2" onClick={onClick}>
        Set focus
      </button>
    </>
  );
};

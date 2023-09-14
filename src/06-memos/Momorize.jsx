// Importamos las dependencias necesarias desde React y nuestros archivos locales.
import { useState } from "react";
import { useCounter } from "../hooks";
import { Small } from "./Small";

// Definimos el componente "Momorize".
export const Momorize = () => {
  // Utilizamos el custom hook "useCounter" para obtener el estado del contador y su función de incremento.
  const { counter, increment } = useCounter(10);

  // Definimos un estado local llamado "show" para controlar la visibilidad de otro componente.
  const [show, setShow] = useState(true);

  return (
    <>
      {/* Mostramos el valor del contador utilizando el componente "Small" */}
      <h1>Counter: <Small value={counter} /></h1>
      <hr />

      {/* Botón para incrementar el contador en 1 */}
      <button
        className="btn btn-primary"
        onClick={() => increment()}
      >
        +1
      </button>

      {/* Botón para alternar la visibilidad del componente "Small" */}
      <button
        className="btn btn-outline-primary"
        onClick={() => setShow(!show)}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  );
};

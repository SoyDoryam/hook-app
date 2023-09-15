import { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
    // Inicializamos el estado del contador en 10.
    const [counter, setCounter] = useState(10);

    // Utilizamos useCallback para memorizar la función incrementFather.
    const incrementFather = useCallback(
        (value) => {
            // Incrementamos el valor del contador en 1 utilizando la función de actualización
            // para asegurarnos de que estamos obteniendo el valor más reciente.
            setCounter((c) => c + value);
        },
        [] // La dependencia está vacía, lo que significa que esta función se memoriza una vez y no cambia.
    );

    // El componente muestra el valor del contador y el componente ShowIncrement que recibe la función incrementFather como prop.

    return (
        <>
            <h1>useCallback Hook: {counter}</h1>
            <hr />
            <ShowIncrement increment={incrementFather} />
        </>
    );
};

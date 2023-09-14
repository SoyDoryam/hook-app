import { useMemo, useState } from "react";
import { useCounter } from "../hooks";

// Función pesada que realiza un ciclo for
const heavyStuff = (iterationNumber = 100) => {
    for (let i = 0; i < iterationNumber; i++) {
        console.log('Ahi vamos....');
    }
    return `${iterationNumber} iteraciones realizadas`;
}

export const MemoHook = () => {
    // Usando el hook useCounter para obtener el estado del contador
    const { counter, increment } = useCounter(4000);

    // Estado local para mostrar u ocultar contenido
    const [show, setShow] = useState(true);

    // Usando useMemo para memorizar el resultado de heavyStuff
    // Solo se recalcula cuando 'counter' cambia
    const memorisedValue = useMemo(() => heavyStuff(counter), [counter]);

    return (
        <>
            <h1>Counter: <small>{counter}</small></h1>
            <hr />

            {/* Muestra el valor memorizado */}
            <h4>{memorisedValue}</h4>

            <button
                className="btn btn-primary"
                onClick={() => increment()}
            >
                +1
            </button>

            <button
                className="btn btn-outline-primary"
                onClick={() => setShow(!show)}
            >
                Show/Hide {JSON.stringify(show)}
            </button>
        </>
    );
}

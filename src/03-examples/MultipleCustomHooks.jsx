import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote } from "./";

export const MultipleCustomHooks = () => {

    // Utiliza el gancho useCounter para administrar el contador
    const { counter, increment } = useCounter(1);

    // Utiliza el gancho useFetch para realizar una solicitud a la API
    const { data, isLoading, hasError } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${ counter }`);

    // Extrae la información del autor y la cita de los datos obtenidos de la API
    const { author, quote } = !!data && data[0];

    return (
        <>
            <h1>BreakingBad Quotes</h1>
            <hr />

            {/* Renderiza el componente LoadingQuote si isLoading es verdadero, de lo contrario, muestra el componente Quote */}
            { isLoading 
                ? <LoadingQuote />
                : <Quote author={ author } quote={ quote } />
            }

            {/* Botón para obtener la siguiente cita */}
            <button 
                className="btn btn-primary"
                disabled={ isLoading } // Deshabilita el botón durante la carga
                onClick={() => increment()} // Incrementa el contador al hacer clic
            >Next quote { counter }</button>
        </>
    )
}

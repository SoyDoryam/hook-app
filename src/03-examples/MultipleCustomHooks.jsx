import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch"

export const MultipleCustomHooks = () => {

    // Usamos el gancho useCounter para inicializar un contador con un valor inicial de 1
    const { counter, increment } = useCounter(1);

    // Usamos el gancho useFetch para realizar una solicitud a una API con la URL que incluye el valor actual de counter
    const { data, isLoading, hasError } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${ counter }`);

    // Desestructuramos la respuesta de la solicitud para obtener el autor y la cita
    const { author, quote } = !!data && data[0];

    return (
        <>
            <h1>BreakingBad Quotes</h1>
            <hr />

            {/* Usamos una expresión ternaria para mostrar un mensaje de carga o la cita real según isLoading */}
            {isLoading ? (
                <div className="alert alert-info text-center">
                    Loading...
                </div>
            ) : (
                // Mostramos la cita y el autor dentro de un bloque de citas
                <blockquote className="blockquote text-end">
                    <p className="mb-1">{ quote }</p>
                    <footer className="blockquote-footer">{ author }</footer>
                </blockquote>
            )}

            {/* El botón "Next quote" se habilita o deshabilita según isLoading y llama a la función increment al hacer clic */}
            <button 
                className="btn btn-primary"
                disabled={ isLoading } // Deshabilita el botón si isLoading es true
                onClick={() => increment()} // Llama a la función increment al hacer clic
            >
                Next quote {counter} {/* Muestra el valor actual de counter junto al texto del botón */}
            </button>
        </>
    )
}

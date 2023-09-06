import { useFetch } from "../hooks/useFetch"

export const MultipleCustomHooks = () => {
    // 1. Utilización del hook personalizado useFetch para realizar una solicitud a la API
    const { data, isLoading, hasError } = useFetch('https://api.breakingbadquotes.xyz/v1/quotes/1');

    // 2. Desestructuración de la respuesta para obtener el autor y la cita
    const { author, quote } = !!data && data[0];

    return (
        <>
            <h1>BreakingBad Quotes</h1>
            <hr />

            {
                // 3. Renderizado condicional basado en el estado de isLoading
                isLoading ? (
                    <div className="alert alert-info text-center">
                        Loading...
                    </div>
                ) : (
                    <blockquote className="blockquote text-end">
                        <p className="mb-1">{ quote }</p>
                        <footer className="blockquote-footer">{ author }</footer>
                    </blockquote>
                )
            }

            <button className="btn btn-primary">
                Next quote
            </button>
        </>
    )
}

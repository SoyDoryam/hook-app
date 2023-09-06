// Importación del Custom Hook useFetch desde la ubicación especificada
import { useFetch } from "../hooks/useFetch"

// Componente funcional MultipleCustomHooks
export const MultipleCustomHooks = () => {

    // Utilización del Custom Hook useFetch para obtener datos
    const { data, isLoading, hasError } = useFetch('https://api.breakingbadquotes.xyz/v1/quotes/1');

    // Impresión en la consola de los datos y estados obtenidos
    console.log({ data, isLoading, hasError })

    // Componente retorna una estructura JSX
    return (
        <>
            <h1>BreakingBad Quotes</h1>
            <hr />
        </>
    )
}

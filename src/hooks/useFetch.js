import { useEffect, useState } from "react";

export const useFetch = (url) => {
    // 1. Inicialización del estado usando useState
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null,
    });

    // 2. Definición de la función asincrónica getFetch
    const getFetch = async () => {
        // 3. Actualización del estado para indicar que la carga está en curso
        setState({
            ...state,
            isLoading: true,
        });

        // 4. Realización de la solicitud a la URL utilizando fetch
        const resp = await fetch(url);
        const data = await resp.json();

        // 5. Actualización del estado con los datos recibidos
        setState({
            data,
            isLoading: false, // 6. Indicación de que la carga ha finalizado
            hasError: null, // 6. Reinicio del posible error a null
        });
    };

    // 7. Utilización de useEffect para realizar la solicitud cuando la URL cambie
    useEffect(() => {
        getFetch();
    }, [url]);

    // 8. Retorno de un objeto con el estado actualizado
    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
    };
};

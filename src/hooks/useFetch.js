// Importación de los hooks necesarios de React
import { useEffect, useState } from "react";

// Declaración y definición del Custom Hook useFetch
export const useFetch = (url) => {
    
    // Estado inicial con valores predeterminados
    const [state, setState] = useState({
        data: null,         // Almacena los datos obtenidos de la petición
        isLoading: true,    // Indica si la petición está en curso
        hasError: null,     // Almacena errores en caso de que ocurran
    });

    // Función para realizar la petición HTTP y actualizar el estado
    const getFetch = async () => {
        // Cambio del estado isLoading a true (indicando inicio de la petición)
        setState({
            ...state,
            isLoading: true,
        });

        // Realización de la petición HTTP utilizando fetch
        const resp = await fetch(url);   // Realiza la petición
        const data = await resp.json();  // Procesa la respuesta como JSON

        // Actualización del estado con los datos obtenidos
        setState({
            data,                       // Almacena los datos de la respuesta
            isLoading: false,           // Indica que la petición ha finalizado
            hasError: null,             // Restablece cualquier error previo
        });
    } 

    // Efecto que se dispara cuando la URL cambia
    useEffect(() => {
        getFetch();  // Llama a la función getFetch para realizar la petición
    }, [url])  // Dependencia que activa el efecto cuando la URL cambia

    // Devuelve un objeto con los estados para su uso en componentes
    return {
        data: state.data,          // Datos obtenidos de la petición
        isLoading: state.isLoading,  // Indicador de carga de la petición
        hasError: state.hasError,    // Información sobre errores, si los hay
    };
}

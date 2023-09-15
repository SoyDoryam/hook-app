import { useCallback, useState } from "react";
import { Hijo } from "./Hijo";

export const Padre = () => {
    // Definimos un array de números.
    const numeros = [2, 4, 6, 8, 10];
    
    // Inicializamos el estado 'valor' en 0.
    const [valor, setValor] = useState(0);

    // Utilizamos useCallback para memorizar la función 'incrementar'.
    // Esta función toma un número como argumento y lo suma al valor actual.
    const incrementar = useCallback(
        (num) => {
            setValor((valorActual) => valorActual + num);
        },
        [] // La dependencia está vacía, lo que significa que esta función se memoriza una vez y no cambia.
    );

    return (
        <div>
            <h1>Padre</h1>        
            <p>Total: {valor}</p>
            <hr />

            {   
                // Mapeamos los números del array 'numeros' y creamos un componente 'Hijo' para cada uno.
                numeros.map((n) => (
                    <Hijo 
                        key={n} // Usamos 'key' con el valor actual como clave única.
                        numero={n} // Pasamos el número como prop al componente hijo.
                        incrementar={incrementar} // Pasamos la función 'incrementar' como prop al componente hijo.
                    />  
                ))
            }
        </div>
    )
}

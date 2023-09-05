import { useEffect, useState } from "react";

export const Message = () => {
    // 1. Inicialización del estado local 'coords' con un objeto que tiene las propiedades 'x' e 'y', ambas inicializadas en 0.
    const [coords, setCoords] = useState({ x: 0, y: 0 });

    useEffect(() => {
        // 2. Definición de la función de callback 'onMouseMove' que se ejecutará en cada evento 'mousemove'.
        const onMouseMove = ({ clientX: x, clientY: y }) => {
            // 3. Actualización del estado 'coords' con las coordenadas 'x' e 'y' del evento.
            setCoords({ x, y });
        };

        // 4. Agregado de un event listener para el evento 'mousemove' de la ventana que llama a 'onMouseMove' cuando se dispara el evento.
        window.addEventListener('mousemove', onMouseMove);

        // 5. Función de retorno para limpiar y eliminar el event listener cuando el componente se desmonta.
        return () => {
            window.removeEventListener('mousemove', onMouseMove);
        };
    }, []); // El arreglo de dependencias vacío indica que este efecto se ejecutará una vez después de la renderización inicial.

    // 6. Retorno del componente, que muestra un encabezado <h3> y las coordenadas 'coords' en formato JSON.
    return (
        <>
            <h3>Usuario ya existe</h3>
            {JSON.stringify(coords)}
        </>
    );
};


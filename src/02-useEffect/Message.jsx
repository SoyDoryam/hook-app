import { useEffect } from "react"

export const Message = () => {
    
    // useEffect se utiliza para realizar acciones cuando el componente se monta y desmonta.
    useEffect(() => {
        console.log('Message Mounted'); // Se muestra cuando el componente se monta.

        // La función de retorno se ejecutará cuando el componente se desmonte.
        return () => {
            console.log('Message Unmounted'); // Se muestra cuando el componente se desmonta.
        }
    }, []); // El arreglo de dependencias está vacío, lo que significa que este efecto solo se ejecuta una vez al montar el componente.

    // El componente renderiza un simple encabezado <h3>.
    return (
        <>
        <h3>Usuario ya existe</h3>
        </>
    )
}

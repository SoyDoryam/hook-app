import { useEffect, useState } from "react"

export const SimpleForm = () => {
    // 1. Inicializar el estado del formulario con valores predefinidos.
    const [formState, setFormState] = useState({
        username: 'strider',
        email: 'dorian@google.com',
    });

    // 2. Desestructurar el estado del formulario para su uso.
    const { username, email } = formState;

    // 3. Función para manejar cambios en los campos de entrada.
    const onInputChange = ({ target }) => {
        // Extraer el nombre y el valor del campo que cambió.
        const { name, value } = target;
        
        // Actualizar el estado del formulario con el nuevo valor.
        setFormState({
            ...formState,
            [name]: value
        });
    };

    // 4. Efecto que se ejecuta después de cada renderizado.
    useEffect(() => {
        console.log('useEffect called!'); // Registro en la consola.
    });

    // 5. Renderizado del formulario.
    return (
        <>
            <h1>Simple Form</h1>
            <hr />

            {/* Campo de entrada para el nombre de usuario */}
            <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={username} // Valor del estado actual
                onChange={onInputChange} // Manejador de cambios
            />

            {/* Campo de entrada para el correo electrónico */}
            <input
                type="email"
                className="form-control mt-2"
                placeholder="rizo@google.com"
                name="email"
                value={email} // Valor del estado actual
                onChange={onInputChange} // Manejador de cambios
            />
        </>
    )
}
